import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Map "mo:core/Map";
import Order "mo:core/Order";

actor {
  type ContactMessage = {
    name : Text;
    email : Text;
    message : Text;
  };

  module ContactMessage {
    public func compare(cm1 : ContactMessage, cm2 : ContactMessage) : Order.Order {
      Text.compare(cm1.name, cm2.name);
    };
  };

  let contactMessages = Map.empty<Text, ContactMessage>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    if (contactMessages.containsKey(email)) {
      Runtime.trap("Message from this email already exists.") };
    let contactMessage : ContactMessage = {
      name;
      email;
      message;
    };
    contactMessages.add(email, contactMessage);
  };

  public query ({ caller }) func getContactMessage(email : Text) : async ContactMessage {
    switch (contactMessages.get(email)) {
      case (null) { Runtime.trap("Message does not exist.") };
      case (?message) { message };
    };
  };

  public query ({ caller }) func getAllContactMessages() : async [ContactMessage] {
    contactMessages.values().toArray().sort();
  };
};
