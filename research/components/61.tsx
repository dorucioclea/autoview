import { tags } from "typia";
import React from "react";
export namespace AutoViewInputSubTypes {
    /**
     * Discount coupon ticket issuance details.
     *
     * `IShoppingCouponTicket` is an entity that symbolizes
     * {@link IShoppingCoupon discount coupon} tickets issued by
     * {@link IShoppingCustomer customers}.
     *
     * And if the target discount coupon specification itself has an expiration
     * date, the expiration date is recorded in expired_at and is automatically
     * discarded after that expiration date. Of course, it doesn't matter if you
     * use the discount coupon for your order within the deadline.
    */
    export type IShoppingCouponTicket = {
        /**
         * Primary Key.
         *
         * @title Primary Key
        */
        id: string;
        /**
         * Customer who've taken the coupon ticket.
         *
         * @title Customer who've taken the coupon ticket
        */
        customer: AutoViewInputSubTypes.IShoppingCustomer;
        /**
         * Target coupon.
         *
         * @title Target coupon
        */
        coupon: AutoViewInputSubTypes.IShoppingCoupon;
        /**
         * Creation time of the record.
         *
         * @title Creation time of the record
        */
        created_at: string;
        /**
         * Expiration time of the ticket.
         *
         * @title Expiration time of the ticket
        */
        expired_at: null | (string & tags.Format<"date-time">);
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
        member: null | any;
        /**
         * Citizen information.
         *
         * If the customer has verified his real name and mobile number.
         *
         * @title Citizen information
        */
        citizen: null | any;
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
        external_user: null | any;
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
    };
    export type IShoppingMember = any;
    export type IShoppingCitizen = any;
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
    export type IShoppingExternalUser = any;
    /**
     * Discount coupon.
     *
     * `IShoppingCoupon` is an entity that symbolizes discount coupons at
     * a shopping mall.
     *
     * Note that, `IShoppingCoupon` only contains specification information
     * about discount coupons. Please keep in mind that this is a different
     * concept from {@link IShoppingCouponTicket}, which refers to the issuance
     * of a discount coupon, or {@link IShoppingCouponTicketPayment}, which
     * refers to its payment.
     *
     * Additionally, discount coupons are applied on an order-by-order basis,
     * but each has its own unique restrictions. For example, a coupon with
     * {@link IShoppingCouponSellerCriteria} may or may not be used only for
     * {@link IShoppingSale} of listings registered by the {@link IShoppingSeller}.
     * Also, there are restrictions such as
     * {@link IShoppingCouponDiscount.threshold minimum amount restrictions} for
     * using discount coupons and
     * {@link IShoppingCouponDiscount.limit maximum discount amount limits}.
     *
     * In addition, you can set whether to issue discount coupons publicly or
     * give them only to people who know the specific issuing code. In addition,
     * there are restrictions such as issued discount coupons having an
     * {@link IShoppingCouponRestriction.expired_at expiration date} or being
     * issued only to customers who came in through a
     * {@link IShoppingCouponFunnelCriteria specific funnel}.
     *
     * For more information, please refer to the properties below and the
     * subsidiary entities described later.
    */
    export type IShoppingCoupon = {
        /**
         * Primary Key.
         *
         * @title Primary Key
        */
        id: string;
        /**
         * Designer who've made the coupon.
         *
         * @title Designer who've made the coupon
        */
        designer: any | any;
        /**
         * Inventory information.
         *
         * @title Inventory information
        */
        inventory: AutoViewInputSubTypes.IShoppingCouponInventory;
        /**
         * List of criteria information.
         *
         * @title List of criteria information
        */
        criterias: (any | any | any | any)[];
        /**
         * Discount information.
         *
         * @title Discount information
        */
        discount: any | any;
        /**
         * Restriction information.
         *
         * @title Restriction information
        */
        restriction: AutoViewInputSubTypes.IShoppingCouponRestriction;
        /**
         * Representative name of the coupon.
         *
         * @title Representative name of the coupon
        */
        name: string;
        /**
         * Opening time of the coupon.
         *
         * @title Opening time of the coupon
        */
        opened_at: null | (string & tags.Format<"date-time">);
        /**
         * Closing time of the coupon.
         *
         * Tickets cannot be issued after this time.
         *
         * However, previously issued tickets can still be used until their
         * expiration date.
         *
         * @title Closing time of the coupon
        */
        closed_at: null | (string & tags.Format<"date-time">);
        /**
         * Creation tie of the record.
         *
         * @title Creation tie of the record
        */
        created_at: string;
    };
    export type IShoppingAdministrator = any;
    export type IShoppingSeller = any;
    /**
     * Inventory information of the coupon.
     *
     * If a {@link IShoppingCoupon coupon} has been designed with limited
     * inventory, this `IShoppingCouponInventory` structure represents the
     * remaining inventory information.
    */
    export type IShoppingCouponInventory = {
        /**
         * Remaining volume for everyone.
         *
         * If there is a limit to the quantity issued, it becomes impossible to
         * issue tickets exceeding this value.
         *
         * In other words, the concept of N coupons being issued on a first-come,
         * first-served basis is created.
         *
         * @title Remaining volume for everyone
        */
        volume: null | (number & tags.Type<"uint32">);
        /**
         * Remaining volume per citizen.
         *
         * As a limit to the total amount of issuance per person, it is common to
         * assign 1 to limit duplicate issuance to the same citizen, or to use the
         * `nul`` value to set no limit.
         *
         * Of course, by assigning a value of N, the total amount issued to the
         * same citizen can be limited.
         *
         * @title Remaining volume per citizen
        */
        volume_per_citizen: null | (number & tags.Type<"uint32">);
    };
    export type IShoppingCouponSectionCriteria = any;
    export type IShoppingCouponSellerCriteria = any;
    export type IShoppingCouponSaleCriteria = any;
    export type IShoppingCouponFunnelCriteria = any;
    export namespace IShoppingCouponDiscount {
        export type IAmount = any;
        export type IPercent = any;
    }
    /**
     * Restriction information of the coupon.
    */
    export type IShoppingCouponRestriction = {
        /**
         * Access level of coupon.
         *
         * - public: possible to find from public API
         * - private: unable to find from public API
         *   - arbitrarily assigned by the seller or administrator
         *   - issued from one-time link
         *
         * @title Access level of coupon
        */
        access: "public" | "private";
        /**
         * Exclusivity or not.
         *
         * An exclusive discount coupon refers to a discount coupon that has an
         * exclusive relationship with other discount coupons and can only be
         * used alone. That is, when an exclusive discount coupon is used, no
         * other discount coupon can be used for the same
         * {@link IShoppingOrder order} or {@link IShoppingOrderGood good}.
         *
         * Please note that this exclusive attribute is a very different concept
         * from multiplicative, which means whether the same coupon can be
         * multiplied and applied to multiple coupons of the same order, so
         * please do not confuse them.
         *
         * @title Exclusivity or not
        */
        exclusive: boolean;
        /**
         * Limited quantity issued.
         *
         * If there is a limit to the quantity issued, it becomes impossible
         * to issue tickets exceeding this value.
         *
         * In other words, the concept of N coupons being issued on
         * a first-come, first-served basis is created.
         *
         * @title Limited quantity issued
        */
        volume: null | (number & tags.Type<"uint32">);
        /**
         * Limited quantity issued per person.
         *
         * As a limit to the total amount of issuance per person, it is
         * common to assign 1 to limit duplicate issuance to the same citizen,
         * or to use the NULL value to set no limit.
         *
         * Of course, by assigning a value of N, the total amount issued
         * to the same citizen can be limited.
         *
         * @title Limited quantity issued per person
        */
        volume_per_citizen: null | (number & tags.Type<"uint32">);
        /**
         * Expiration day(s) value.
         *
         * The concept of expiring N days after a discount coupon ticket is issued.
         *
         * Therefore, customers must use the ticket within N days, if possible,
         * from the time it is issued.
         *
         * @title Expiration day(s) value
        */
        expired_in: null | (number & tags.Type<"uint32">);
        /**
         * Expiration date.
         *
         * A concept that expires after YYYY-MM-DD after a discount coupon ticket
         * is issued.
         *
         * Double restrictions are possible with expired_in, of which the one
         * with the shorter expiration date is used.
         *
         * @title Expiration date
        */
        expired_at: null | (string & tags.Format<"date-time">);
    };
}
export type AutoViewInput = AutoViewInputSubTypes.IShoppingCouponTicket;



// The component name must always be "VisualComponent"
export default function VisualComponent(value: AutoViewInput): React.ReactNode {
  // 1. Define data aggregation/transformation functions or derived constants if necessary.
  const issuedDate = new Date(value.created_at).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const expiresDate = value.expired_at
    ? new Date(value.expired_at).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "Never expires";

  const couponOpened = value.coupon.opened_at
    ? new Date(value.coupon.opened_at).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "N/A";
  const couponClosed = value.coupon.closed_at
    ? new Date(value.coupon.closed_at).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "N/A";

  const {
    access,
    exclusive,
    volume: resVolume,
    volume_per_citizen: resPerCitizen,
    expired_in: resExpiredIn,
    expired_at: resExpiredAt,
  } = value.coupon.restriction;
  const restrictionExpiredAt = resExpiredAt
    ? new Date(resExpiredAt).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  const invVolume =
    value.coupon.inventory.volume != null
      ? value.coupon.inventory.volume
      : "Unlimited";
  const invPerCitizen =
    value.coupon.inventory.volume_per_citizen != null
      ? value.coupon.inventory.volume_per_citizen
      : "Unlimited";

  // 2. Compose the visual structure using JSX and Tailwind CSS.
  return (
    <div className="p-4 bg-white rounded-lg shadow-md space-y-6 max-w-md mx-auto">
      {/* Coupon Ticket Header */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 truncate">
          {value.coupon.name}
        </h2>
        <p className="text-sm text-gray-500">
          Issued on {issuedDate} &middot; Expires: {expiresDate}
        </p>
      </div>

      {/* Restriction & Inventory Badges */}
      <div className="flex flex-wrap gap-2">
        <span
          className={`px-2 py-1 text-xs font-medium rounded ${
            access === "public"
              ? "bg-green-100 text-green-800"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {access === "public" ? "Public" : "Private"}
        </span>
        <span
          className={`px-2 py-1 text-xs font-medium rounded ${
            exclusive ? "bg-red-100 text-red-800" : "bg-blue-100 text-blue-800"
          }`}
        >
          {exclusive ? "Exclusive" : "Non-Exclusive"}
        </span>
        <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded">
          Total Volume: {invVolume}
        </span>
        <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded">
          Per Person: {invPerCitizen}
        </span>
        {resExpiredIn != null && (
          <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded">
            Expires In: {resExpiredIn} days
          </span>
        )}
        {restrictionExpiredAt && (
          <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded">
            Expires On: {restrictionExpiredAt}
          </span>
        )}
      </div>

      {/* Additional Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h3 className="text-sm font-medium text-gray-700">Channel</h3>
          <p className="text-sm text-gray-800 truncate">
            {value.customer.channel.name} ({value.customer.channel.code})
          </p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-700">
            Coupon Validity
          </h3>
          <p className="text-sm text-gray-800">
            Open: {couponOpened} <br />
            Close: {couponClosed}
          </p>
        </div>
      </div>
    </div>
  );
}
