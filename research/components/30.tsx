import * as LucideReact from "lucide-react";
import React, { JSX } from "react";
import { tags } from "typia";

export namespace AutoViewInputSubTypes {
  /**
   * A comment written on an inquiry article.
   *
   * `IShoppingSaleInquiryComment` is a subtype entity of {@link IBbsArticleComment},
   * and is used when you want to communicate with multiple people about an
   * {@link IShoppingSaleInquiry inquiry} written by a
   * {@link IShoppingCustomer customer}.
   *
   * For reference, only related parties can write comments for
   * {@link IShoppingSeller sellers}, but there is no limit to
   * {@link IShoppingCustomer customers}. In other words, anyone customer can
   * freely write a comment, even if they are not the person who wrote the inquiry.
   */
  export type IShoppingSaleInquiryComment = {
    /**
     * Writer of the comment.
     *
     * Both customer and seller can write comment on the sale inquiry.
     *
     * By the way, no restriction on the customer, but seller must be the
     * person who've registered the sale.
     *
     * @title Writer of the comment
     */
    writer:
      | AutoViewInputSubTypes.IShoppingAdministrator.IInvert
      | AutoViewInputSubTypes.IShoppingCustomer
      | AutoViewInputSubTypes.IShoppingSeller.IInvert;
    /**
     * Primary Key.
     *
     * @title Primary Key
     */
    id: string;
    /**
     * Parent comment's ID.
     *
     * @title Parent comment's ID
     */
    parent_id: null | (string & tags.Format<"uuid">);
    /**
     * List of snapshot contents.
     *
     * It is created for the first time when a comment being created, and is
     * accumulated every time the comment is modified.
     *
     * @title List of snapshot contents
     */
    snapshots: AutoViewInputSubTypes.IBbsArticleComment.ISnapshot[];
    /**
     * Creation time of comment.
     *
     * @title Creation time of comment
     */
    created_at: string;
  };
  /**
   * Administrator account.
   *
   * `IShoppingAdministrator` is an entity that embodies a person who manages
   * the shopping mall system, with {@link IShoppingMember membership} joining.
   *
   * For reference, unlike {@link IShoppingCustomer customers} which can participate
   * even without membership joining, administrator must join membership to operate
   * managements. Also, administrator must perform the
   * {@link IShoppingCitizen real-name and mobile authentication}, too.
   */
  export type IShoppingAdministrator = {
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
  };
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
    export type IInvert = {
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
    };
  }
  /**
   * Member Account.
   *
   * `IShoppingMember` is an entity that symbolizes the case when a
   * {@link IShoppingCustomer} signs up as a member of this shopping mall
   * system.
   *
   * If a `IShoppingMember` has seller or administrator property. it means that
   * the {@link IShoppingCustomer} has acting as a {@link IShoppingSeller seller}
   * or {@link IShoppingAdministrator administrator} at the same time.
   */
  export type IShoppingMember = {
    /**
     * Citizen information.
     *
     * Only when has verified as a citizen, with mobile number and real name.
     *
     * For reference, if the member has signed up as a seller or administrator,
     * this citizen information must be.
     *
     * @title Citizen information
     */
    citizen: null | AutoViewInputSubTypes.IShoppingCitizen;
    /**
     * Seller information.
     *
     * If the member also signed up as a seller.
     *
     * @title Seller information
     */
    seller: null | AutoViewInputSubTypes.IShoppingSeller;
    /**
     * Administrator information.
     *
     * If the member also signed up as an administrator.
     *
     * @title Administrator information
     */
    administrator: null | AutoViewInputSubTypes.IShoppingAdministrator;
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
  };
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
    export type IInvert = {
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
    };
  }
  /**
   * Email address of member.
   *
   * This shopping mall system allows multiple email addresses to be
   * registered for one {@link IShoppingMember member}. If you don't have to
   * plan such multiple email addresses, just use only one.
   */
  export type IShoppingMemberEmail = {
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
  };
  /**
   * Customer information, but not a person but a connection basis.
   *
   * `IShoppingCustomer` is an entity that literally embodies the information of
   * those who participated in the market as customers. By the way, the
   * `IShoppingCustomer` does not mean a person, but a connection basis. Therefore,
   * even if the same person connects to the shopping mall multiple, multiple
   * records are created in `IShoppingCustomer`.
   *
   * The first purpose of this is to track the customer's inflow path in detail,
   * and it is for cases where the same person enters as a non-member,
   * {@link IShoppingCartCommodity puts items in the shopping cart} in advance,
   * and only authenticates their {@link IShoppingCitizen real name} or
   * registers/logs in at the moment of {@link IShoppingOrderPublish payment}.
   * It is the second. Lastly, it is to accurately track the activities that
   * a person performs at the shopping mall in various ways like below.
   *
   * - Same person comes from an {@link IShoppingExternalUser external service}
   * - Same person creates multiple accounts
   * - Same person makes a {@link IShoppingOrderPublish purchase} as a non-member with only {@link IShoppingCitizen real name authentication}
   * - Same person acts both {@link IShoppingSeller seller} and {@link IShoppingAdministrator admin} at the same time
   *
   * Therefore, `IShoppingCustomer` can have multiple records with the same
   * {@link IShoppingCitizen}, {@link IShoppingMember}, and
   * {@link IShoppingExternalUser}. Additionally, if a customer signs up for
   * membership after verifying their real name or signs up for our service after
   * being a user of an external service, all related records are changed at once.
   * Therefore, identification and tracking of customers can be done very
   * systematically.
   */
  export type IShoppingCustomer = {
    /**
     * Discriminant for the type of customer.
     *
     * @title Discriminant for the type of customer
     */
    type: "customer";
    /**
     * Membership information.
     *
     * If the customer has joined as a member.
     *
     * @title Membership information
     */
    member: null | AutoViewInputSubTypes.IShoppingMember;
    /**
     * Citizen information.
     *
     * If the customer has verified his real name and mobile number.
     *
     * @title Citizen information
     */
    citizen: null | AutoViewInputSubTypes.IShoppingCitizen;
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
    referrer:
      | null
      | (string & tags.Format<"uri">)
      | (string & tags.MaxLength<0>);
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
  };
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
    export type IInvert = {
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
      referrer:
        | null
        | (string & tags.Format<"uri">)
        | (string & tags.MaxLength<0>);
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
    };
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
  export type IShoppingChannel = {
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
  };
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
  export type IShoppingExternalUser = {
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
  };
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
  export type IShoppingCitizen = {
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
  };
  /**
   * Seller information.
   *
   * `IShoppingSeller` is an entity that embodies a person who registers
   * {@link IShoppingSale sales} to operate selling activities, with
   * {@link IShoppingMember membership} joining.
   *
   * For reference, unlike {@link IShoppingCustomer customers} which can
   * participate even without membership joining, seller must join membership
   * to operate sales. Also, seller must do the
   * {@link IShoppingCitizen real-name and mobile authentication}, too.
   */
  export type IShoppingSeller = {
    /**
     * Primary Key.
     *
     * @title Primary Key
     */
    id: string;
    /**
     * Creation tmie of record.
     *
     * Another words, the time when the seller has signed up.
     *
     * @title Creation tmie of record
     */
    created_at: string;
  };
  export namespace IShoppingSeller {
    /**
     * Invert information starting from seller info.
     *
     * Instead of accessing to the seller information from the
     * {@link IShoppingCustomer.member} -> {@link IShoppingMember.seller},
     * `IShoppingSeller.IInvert` starts from the seller information
     * and access to the customer, member and {@link IShoppingCitizen citizen}
     * information inversely.
     */
    export type IInvert = {
      /**
       * Discriminant for the type of seller.
       *
       * @title Discriminant for the type of seller
       */
      type: "seller";
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
       * Creation tmie of record.
       *
       * Another words, the time when the seller has signed up.
       *
       * @title Creation tmie of record
       */
      created_at: string;
    };
  }
  export namespace IBbsArticleComment {
    /**
     * Snapshot of comment.
     *
     * `IBbsArticleComment.ISnapshot` is a snapshot entity that contains
     * the contents of the comment.
     *
     * As mentioned in {@link IBbsArticleComment}, designed to keep evidence
     * and prevent fraud.
     */
    export type ISnapshot = {
      /**
       * Primary Key.
       *
       * @title Primary Key
       */
      id: string;
      /**
       * Creation time of snapshot record.
       *
       * In other words, creation time or update time or comment.
       *
       * @title Creation time of snapshot record
       */
      created_at: string;
      /**
       * Format of body.
       *
       * Same meaning with extension like `html`, `md`, `txt`.
       *
       * @title Format of body
       */
      format: "html" | "md" | "txt";
      /**
       * Content body of comment.
       *
       * @title Content body of comment
       */
      body: string;
      /**
       * List of attachment files.
       *
       * @title List of attachment files
       */
      files: AutoViewInputSubTypes.IAttachmentFile.ICreate[];
    };
  }
  export namespace IAttachmentFile {
    export type ICreate = {
      /**
       * File name, except extension.
       *
       * If there's file `.gitignore`, then its name is an empty string.
       *
       * @title File name, except extension
       */
      name: string;
      /**
       * Extension.
       *
       * Possible to omit like `README` case.
       *
       * @title Extension
       */
      extension: null | (string & tags.MinLength<1> & tags.MaxLength<8>);
      /**
       * URL path of the real file.
       *
       * @title URL path of the real file
       */
      url: string;
    };
  }
}
export type AutoViewInput = AutoViewInputSubTypes.IShoppingSaleInquiryComment;

// The component name must always be "VisualComponent"
export default function VisualComponent(value: AutoViewInput): React.ReactNode {
  // 1. Define data aggregation/transformation functions or derived constants if necessary.
  const { writer, created_at, snapshots } = value;

  // Sort snapshots by creation date to find the latest
  const sortedSnapshots = [...snapshots].sort(
    (a, b) =>
      new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
  );
  const latestSnapshot = sortedSnapshots[sortedSnapshots.length - 1];
  const isEdited = snapshots.length > 1;

  // Format dates
  const formatDate = (iso: string) =>
    new Date(iso).toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  const createdAtStr = formatDate(created_at);
  const editedAtStr = isEdited ? formatDate(latestSnapshot.created_at) : "";

  // Derive writer display name and icon
  let writerName = writer.id;
  if ("citizen" in writer && writer.citizen?.name) {
    writerName = writer.citizen.name;
  } else if ("member" in writer && writer.member?.nickname) {
    writerName = writer.member.nickname;
  }
  const writerType = writer.type.charAt(0).toUpperCase() + writer.type.slice(1);
  const writerIcon =
    writer.type === "customer" ? (
      <LucideReact.User
        size={16}
        className="text-gray-500"
        aria-label="Customer"
      />
    ) : writer.type === "administrator" ? (
      <LucideReact.Shield
        size={16}
        className="text-blue-500"
        aria-label="Administrator"
      />
    ) : (
      <LucideReact.Store
        size={16}
        className="text-green-500"
        aria-label="Seller"
      />
    );

  // 2. Compose the visual structure using JSX and Tailwind CSS.
  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-full">
      {/* Writer and type */}
      <div className="flex items-center mb-1">
        {writerIcon}
        <span className="ml-2 text-sm font-medium text-gray-700">
          {writerName}
          <span className="ml-1 text-xs text-gray-400">({writerType})</span>
        </span>
      </div>

      {/* Dates */}
      <div className="flex items-center text-xs text-gray-500 mb-3">
        <LucideReact.Calendar size={14} className="mr-1" />
        <span>Posted on {createdAtStr}</span>
        {isEdited && <span className="ml-2">(Edited: {editedAtStr})</span>}
      </div>

      {/* Comment body (latest snapshot) */}
      <div className="prose prose-sm text-gray-800 mb-4 line-clamp-4">
        {latestSnapshot.format === "html" ? (
          <div dangerouslySetInnerHTML={{ __html: latestSnapshot.body }} />
        ) : (
          <p>{latestSnapshot.body}</p>
        )}
      </div>

      {/* Attachments, if any */}
      {latestSnapshot.files.length > 0 && (
        <div className="border-t pt-3">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">
            Attachments
          </h3>
          <ul className="space-y-2">
            {latestSnapshot.files.map((file) => {
              const filename = file.extension
                ? `${file.name}.${file.extension}`
                : file.name;
              return (
                <li
                  key={file.url}
                  className="flex items-center text-sm text-gray-600"
                >
                  <LucideReact.FileText
                    size={16}
                    className="text-indigo-500 mr-2"
                  />
                  <a
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {filename}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
