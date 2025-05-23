import { tags } from "typia";
import React, { JSX } from "react";
import * as LucideReact from "lucide-react";
export namespace AutoViewInputSubTypes {
    export namespace IShoppingAdministrator {
        /**
         * Invert information starting from administrator info.
         *
         * Instead of accessing to the administrator information from the
         * {@link IShoppingCustomer.member} -> {@link IShoppingMember.administrator},
         * `IShoppingAdministrator.IInvert` starts from the administrator information
         * and access to the customer, member and {@link IShoppingCitizen citizen}
         * information inversely.
        */
        export interface IInvert {
            /**
             * Discriminant for the type of customer.
             *
             * @title Discriminant for the type of customer
            */
            type: "administrator";
            /**
             * Membership joining information.
             *
             * @title Membership joining information
            */
            member: AutoViewInputSubTypes.IShoppingMember.IInvert;
            /**
             * Customer, the connection information.
             *
             * @title Customer, the connection information
            */
            customer: AutoViewInputSubTypes.IShoppingCustomer.IInvert;
            /**
             * Real-name and mobile number authentication information.
             *
             * @title Real-name and mobile number authentication information
            */
            citizen: AutoViewInputSubTypes.IShoppingCitizen;
            /**
             * Primary Key.
             *
             * @title Primary Key
            */
            id: string;
            /**
             * Creation time of record.
             *
             * Another words, the time when the administrator has signed up.
             *
             * @title Creation time of record
            */
            created_at: string;
        }
    }
    export namespace IShoppingMember {
        /**
         * Invert information of member.
         *
         * This invert member information has been designed to be used for another
         * invert information of sellers and administrators like below.
         *
         * - {@link IShoppingSeller.IInvert}
         * - {@link IShoppingAdministrator.IInvert}
        */
        export interface IInvert {
            /**
             * Primary Key.
             *
             * @title Primary Key
            */
            id: string;
            /**
             * Nickname that uniquely identifies the member.
             *
             * @title Nickname that uniquely identifies the member
            */
            nickname: string;
            /**
             * List of emails.
             *
             * @title List of emails
            */
            emails: AutoViewInputSubTypes.IShoppingMemberEmail[];
            /**
             * Creation time of record.
             *
             * Another words, the time when the member has signed up.
             *
             * @title Creation time of record
            */
            created_at: string;
        }
    }
    /**
     * Email address of member.
     *
     * This shopping mall system allows multiple email addresses to be
     * registered for one {@link IShoppingMember member}. If you don't have to
     * plan such multiple email addresses, just use only one.
    */
    export interface IShoppingMemberEmail {
        /**
         * Primary Key.
         *
         * @title Primary Key
        */
        id: string;
        /**
         * Email address value.
         *
         * @title Email address value
        */
        value: string;
        /**
         * Creation time of record.
         *
         * @title Creation time of record
        */
        created_at: string;
    }
    export namespace IShoppingCustomer {
        /**
         * Inverted customer information.
         *
         * This inverted customer information has been designed to be used for
         * another invert information of sellers and administrators like below.
         *
         * - {@link IShoppingSeller.IInvert}
         * - {@link IShoppingAdministrator.IInvert}
        */
        export interface IInvert {
            /**
             * Primary Key.
             *
             * @title Primary Key
            */
            id: string;
            /**
             * Belonged channel.
             *
             * @title Belonged channel
            */
            channel: AutoViewInputSubTypes.IShoppingChannel;
            /**
             * External user information.
             *
             * When the customer has come from an external service.
             *
             * @title External user information
            */
            external_user: null | AutoViewInputSubTypes.IShoppingExternalUser;
            /**
             * Connection address.
             *
             * Same with {@link window.location.href} of client.
             *
             * @title Connection address
            */
            href: string;
            /**
             * Referrer address.
             *
             * Same with {@link window.document.referrer} of client.
             *
             * @title Referrer address
            */
            referrer: null | (string & tags.Format<"uri">) | (string & tags.MaxLength<0>);
            /**
             * Connection IP Address.
             *
             * @title Connection IP Address
            */
            ip: (string & tags.Format<"ipv4">) | (string & tags.Format<"ipv6">);
            /**
             * Creation time of the connection record.
             *
             * @title Creation time of the connection record
            */
            created_at: string;
        }
    }
    /**
     * Channel information.
     *
     * `IShoppingChannel` is a concept that shapes the distribution channel in the
     * market. Therefore, the difference in the channel in this e-commerce system
     * means that it is another site or application.
     *
     * By the way, if your shopping mall system requires only one channel, then
     * just use only one. This concept is designed to be expandable in the future.
    */
    export interface IShoppingChannel {
        /**
         * Primary Key.
         *
         * @title Primary Key
        */
        id: string;
        /**
         * Creation time of record.
         *
         * @title Creation time of record
        */
        created_at: string;
        /**
         * Identifier code.
         *
         * @title Identifier code
        */
        code: string;
        /**
         * Name of the channel.
         *
         * @title Name of the channel
        */
        name: string;
    }
    /**
     * External user information.
     *
     * `IShoppingExternalUser` is an entity dsigned for when this system needs
     * to connect with external services and welcome their users as
     * {@link IShoppingCustomer customers} of this service.
     *
     * For reference, customers who connect from an external service must have
     * this record, and the external service user is identified through the two
     * attributes {@link application} and {@link uid}. If a customer connected
     * from an external service completes
     * {@link IShoppingCitizen real-name authentication} from this service, each
     * time the external service user reconnects to this service and issues a
     * new customer authentication token, real-name authentication begins with
     * completed.
     *
     * And {@link password} is the password issued to the user by the external
     * service system (the so-called permanent user authentication token), and
     * is never the actual user password. However, for customers who entered the
     * same application and uid as the current external system user, this is to
     * determine whether to view this as a correct external system user or a
     * violation.
     *
     * In addition, additional information received from external services can
     * be recorded in the data field in JSON format.
    */
    export interface IShoppingExternalUser {
        /**
         * Primary Key.
         *
         * @title Primary Key
        */
        id: string;
        /**
         * Citizen activation info.
         *
         * @title Citizen activation info
        */
        citizen: null | AutoViewInputSubTypes.IShoppingCitizen;
        /**
         * Creation time of record.
         *
         * Another word, first time when the external user connected.
         *
         * @title Creation time of record
        */
        created_at: string;
        /**
         * Identifier key of external user from the external system.
         *
         * @title Identifier key of external user from the external system
        */
        uid: string;
        /**
         * Identifier code of the external service.
         *
         * It can be same with {@link IShoppingChannel.code} in common.
         *
         * @title Identifier code of the external service
        */
        application: string;
        /**
         * Nickname of external user in the external system.
         *
         * @title Nickname of external user in the external system
        */
        nickname: string;
        /**
         * Additional information about external user from the external
         * system.
        */
        data: any;
    }
    /**
     * Citizen verification information.
     *
     * `IShoppingCitizen` is an entity that records the user's
     * {@link name real name} and {@link mobile} input information.
     *
     * For reference, in South Korea, real name authentication is required for
     * e-commerce participants, so the name attribute is important. However, the
     * situation is different overseas, so in reality, mobile attributes are the
     * most important, and identification of individual person is also done based
     * on this mobile.
     *
     * Of course, real name and mobile phone authentication information are
     * encrypted and stored.
    */
    export interface IShoppingCitizen {
        /**
         * Primary Key.
         *
         * @title Primary Key
        */
        id: string;
        /**
         * Creation time of record.
         *
         * @title Creation time of record
        */
        created_at: string;
        /**
         * Mobile number.
         *
         * @title Mobile number
        */
        mobile: string;
        /**
         * Real name, or equivalent nickname.
         *
         * @title Real name, or equivalent nickname
        */
        name: string;
    }
}
export type AutoViewInput = AutoViewInputSubTypes.IShoppingAdministrator.IInvert;



// The component name must always be "VisualComponent"
export default function VisualComponent(value: AutoViewInput): React.ReactNode {
  // 1. Define data aggregation/transformation functions or derived constants if necessary.
  const formatDate = (iso: string) =>
    new Date(iso).toLocaleString(undefined, {
      dateStyle: "medium",
      timeStyle: "short",
    });

  const { member, customer, citizen, created_at: adminCreated } = value;
  const memberJoined = formatDate(member.created_at);
  const adminJoined = formatDate(adminCreated);
  const citizenVerified = formatDate(citizen.created_at);
  const customerConnected = formatDate(customer.created_at);

  // 2. Compose the visual structure using JSX and Tailwind CSS.
  return (
    <div className="p-4 bg-white rounded-lg shadow-md space-y-4">
      {/* Header */}
      <div className="flex items-center space-x-2">
        <LucideReact.ShieldCheck className="text-blue-500" size={20} />
        <h2 className="text-lg font-semibold text-gray-800">
          Administrator Profile
        </h2>
      </div>

      {/* Member Information */}
      <div className="bg-gray-50 p-3 rounded space-y-2">
        <h3 className="flex items-center text-sm font-medium text-gray-700">
          <LucideReact.User className="mr-1" size={16} />
          Member
        </h3>
        <div className="text-gray-800 font-medium">{member.nickname}</div>
        <div className="flex items-center text-gray-600 text-sm">
          <LucideReact.Calendar className="mr-1" size={14} />
          Joined {memberJoined}
        </div>
        <div className="mt-1 flex flex-wrap gap-2">
          {member.emails.map((email) => (
            <div
              key={email.id}
              className="flex items-center text-gray-600 text-sm"
            >
              <LucideReact.Mail className="mr-1" size={14} />
              {email.value}
            </div>
          ))}
        </div>
      </div>

      {/* Citizen Verification */}
      <div className="bg-gray-50 p-3 rounded space-y-2">
        <h3 className="flex items-center text-sm font-medium text-gray-700">
          <LucideReact.BadgeCheck className="mr-1" size={16} />
          Verification
        </h3>
        <div className="flex items-center text-gray-600 text-sm">
          <LucideReact.User className="mr-1" size={14} />
          {citizen.name}
        </div>
        <div className="flex items-center text-gray-600 text-sm">
          <LucideReact.Phone className="mr-1" size={14} />
          {citizen.mobile}
        </div>
        <div className="flex items-center text-gray-600 text-sm">
          <LucideReact.Calendar className="mr-1" size={14} />
          Verified {citizenVerified}
        </div>
      </div>

      {/* Customer Connection */}
      <div className="bg-gray-50 p-3 rounded space-y-2">
        <h3 className="flex items-center text-sm font-medium text-gray-700">
          <LucideReact.Globe className="mr-1" size={16} />
          Customer
        </h3>
        <div className="flex items-center text-gray-600 text-sm">
          <LucideReact.Tag className="mr-1" size={14} />
          Channel: {customer.channel.name}
        </div>
        {customer.external_user && (
          <div className="mt-1 space-y-1">
            <div className="flex items-center text-gray-600 text-sm">
              <LucideReact.Shield className="mr-1" size={14} />
              External: {customer.external_user.application} @{" "}
              {customer.external_user.uid}
            </div>
            {customer.external_user.citizen && (
              <>
                <div className="flex items-center text-gray-600 text-sm">
                  <LucideReact.User className="mr-1" size={14} />
                  {customer.external_user.citizen.name}
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <LucideReact.Phone className="mr-1" size={14} />
                  {customer.external_user.citizen.mobile}
                </div>
              </>
            )}
          </div>
        )}
        <div className="flex items-center text-gray-600 text-sm">
          <LucideReact.Link className="mr-1" size={14} />
          {customer.href}
        </div>
        {customer.referrer && (
          <div className="flex items-center text-gray-600 text-sm">
            <LucideReact.Link className="mr-1" size={14} />
            Referrer: {customer.referrer}
          </div>
        )}
        <div className="flex items-center text-gray-600 text-sm">
          <LucideReact.Wifi className="mr-1" size={14} />
          IP: {customer.ip}
        </div>
        <div className="flex items-center text-gray-600 text-sm">
          <LucideReact.Calendar className="mr-1" size={14} />
          Connected {customerConnected}
        </div>
      </div>

      {/* Administrator Details */}
      <div className="bg-gray-50 p-3 rounded space-y-2">
        <h3 className="flex items-center text-sm font-medium text-gray-700">
          <LucideReact.UserCheck className="mr-1" size={16} />
          Administrator
        </h3>
        <div className="flex items-center text-gray-600 text-sm">
          <span className="font-medium text-gray-800 mr-1">Type:</span>
          {value.type}
        </div>
        <div className="flex items-center text-gray-600 text-sm">
          <LucideReact.Calendar className="mr-1" size={14} />
          Signed Up {adminJoined}
        </div>
      </div>
    </div>
  );
}
