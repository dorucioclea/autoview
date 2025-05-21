import { tags } from "typia";
import React from "react";
export namespace AutoViewInputSubTypes {
    /**
     * Item in a shopping cart.
     *
     * `IShoppingCartCommodity` is an entity that represents a
     * {@link IShoppingSaleSnapshot snapshot} of the items that
     * {@link IShoppingCustomer customer} has placed into his shopping cart with a
     * {@link IShoppingOrder purchase} in mind. And if the customer continues this
     * into an actual order in the future, `IShoppingCartCommodity` be changed to
     * {@link IShoppingOrderGood}.
     *
     * And while adding a sale snapshot to the shopping cart, the customer inevitably
     * selects specific {@link IShoppingSaleUnit units} and
     * {@link IShoppingSaleUnitStock final stocks} within the listing snapshot.
     * Information about these units and stocks is recorded in the subsidiary entity
     * {@link IShoppingCartCommodityStock}. Also, there is an attribute {@link volume}
     * that indicates how many sets of snapshots of the target commodity will be
     * purchased. This "volume" is a value that will be multiplied by
     * {@link IShoppingSaleUnitStock.IInvert.quantity}, the quantity for each
     * component.
    */
    export type IShoppingCartCommodity = {
        /**
         * Primary Key.
         *
         * If you want to continue to the order the commodity, then use this ID to order.
         *
         * @title Primary Key
        */
        id: string;
        /**
         * Invert information of the sale (snapshot), in the perspective of commodity.
         *
         * @title Invert information of the sale (snapshot), in the perspective of commodity
        */
        sale: AutoViewInputSubTypes.IShoppingSaleSnapshot.IInvert;
        /**
         * Whether current commodity is orderable or not.
         *
         * If this attribute is `false`, then the commodity is not orderable, because
         * it has already been ordered.
         *
         * @title Whether current commodity is orderable or not
        */
        orderable: boolean;
        /**
         * Whether current commodity is pseudo or not.
         *
         * When this attribute is `true`, then the commodity is not the real one,
         * but just fake information only for calculating the discount effect by
         * {@link IShoppingCoupon coupons}.
         *
         * @title Whether current commodity is pseudo or not
        */
        pseudo: boolean;
        /**
         * Volume of the commodity to purchase.
         *
         * A value indicating how many sets would be multiplied to the children
         * {@link IShoppingSaleUnitStock.IInvert.quantity} values.
         *
         * @title Volume of the commodity to purchase
        */
        volume: number & tags.Type<"int32">;
        /**
         * Price of the commodity.
         *
         * For reference, this price value has not been multiplied by the
         * {@link volume} value. It just sumed up the prices of the children
         * {@link IShoppingSaleUnitStock.IInvert.price} values.
         *
         * @title Price of the commodity
        */
        price: AutoViewInputSubTypes.IShoppingPrice;
        /**
         * Creation time of the record.
         *
         * @title Creation time of the record
        */
        created_at: string;
    };
    export namespace IShoppingSaleSnapshot {
        /**
         * Invert information of the sale snapshot, in the perspective of commodity.
         *
         * `IShoppingSaleSnapshot.IInvert` is a structure used to represent a
         * snapshot in the perspective of a {@link IShoppingCommodity}, corresponding
         * to an {@link IShoppingCartCommodityStock} entity.
         *
         * Therefore, `IShoppingSaleSnapshot.IInvert` does not contain every
         * {@link IShoppingSaleUnit units} and {@link IShoppingSaleUnitStock stocks}
         * of the snapshot records, but only some of the records which are put
         * into the {@link IShoppingCartCommodity shopping cart}.
        */
        export type IInvert = {
            /**
             * Belonged section's information.
             *
             * @title Belonged section's information
            */
            section: AutoViewInputSubTypes.IShoppingSection;
            /**
             * Seller who've registered the sale.
             *
             * @title Seller who've registered the sale
            */
            seller: AutoViewInputSubTypes.IShoppingSeller.IInvert;
            /**
             * Primary Key of Sale.
             *
             * @title Primary Key of Sale
            */
            id: string;
            /**
             * Primary Key of Snapshot.
             *
             * @title Primary Key of Snapshot
            */
            snapshot_id: string;
            /**
             * Whether the snapshot is the latest one or not.
             *
             * @title Whether the snapshot is the latest one or not
            */
            latest: boolean;
            /**
             * Description and image content describing the sale.
             *
             * @title Description and image content describing the sale
            */
            content: AutoViewInputSubTypes.IShoppingSaleContent.IInvert;
            /**
             * List of categories.
             *
             * Which categories the sale is registered to.
             *
             * @title List of categories
            */
            categories: AutoViewInputSubTypes.IShoppingChannelCategory.IInvert[];
            /**
             * List of search tags.
             *
             * @title List of search tags
            */
            tags: string[];
            /**
             * List of units.
             *
             * Records about individual product composition information that are sold
             * in the sale. Each {@link IShoppingSaleUnit unit} record has configurable
             * {@link IShoppingSaleUnitOption options},
             * {@link IShoppingSaleUnitOptionCandidate candidate} values for each
             * option, and {@link IShoppingSaleUnitStock final stocks} determined by
             * selecting every candidate values of each option.
             *
             * @title List of units
            */
            units: AutoViewInputSubTypes.IShoppingSaleUnit.IInvert[];
            /**
             * Creation time of the record.
             *
             * Note that, this property is different with {@link opened_at},
             * which means the timepoint of the sale is opened.
             *
             * @title Creation time of the record
            */
            created_at: string;
            /**
             * Last updated time of the record.
             *
             * In another words, creation time of the last snapshot.
             *
             * @title Last updated time of the record
            */
            updated_at: string;
            /**
             * Paused time of the sale.
             *
             * The sale is paused by the seller, for some reason.
             *
             * {@link IShoppingCustomer Customers} can still see the sale on the
             * both list and detail pages, but the sale has a warning label
             * "The sale is paused by the seller".
             *
             * @title Paused time of the sale
            */
            paused_at: null | (string & tags.Format<"date-time">);
            /**
             * Suspended time of the sale.
             *
             * The sale is suspended by the seller, for some reason.
             *
             * {@link IShoppingCustomer Customers} cannot see the sale on the
             * both list and detail pages. It is almost same with soft delettion,
             * but there's a little bit difference that the owner
             * {@link IShoppingSeller seller} can still see the sale and resume it.
             *
             * Of course, the {@link IShoppingCustomer customers} who have
             * already purchased the sale can still see the sale on the
             * {@link IShoppingOrder order} page.
             *
             * @title Suspended time of the sale
            */
            suspended_at: null | (string & tags.Format<"date-time">);
            /**
             * Opening time of the sale.
             *
             * @title Opening time of the sale
            */
            opened_at: null | (string & tags.Format<"date-time">);
            /**
             * Closing time of the sale.
             *
             * If this value is `null`, the sale be continued forever.
             *
             * @title Closing time of the sale
            */
            closed_at: null | (string & tags.Format<"date-time">);
        };
    }
    /**
     * Section information.
     *
     * `IShoppingSection` is a concept that refers to the spatial information of
     * the market.
     *
     * If we compare the section mentioned here to the offline market, it means a
     * spatially separated area within the store, such as the "fruit corner" or
     * "butcher corner". Therefore, in the {@link IShoppingSale sale} entity, it is
     * not possible to classify multiple sections simultaneously, but only one section
     * can be classified.
     *
     * By the way, if your shopping mall system requires only one section, then just
     * use only one. This concept is designed to be expandable in the future.
    */
    export type IShoppingSection = {
        /**
         * Primary Key.
         *
         * @title Primary Key
        */
        id: string;
        /**
         * Identifier code.
         *
         * @title Identifier code
        */
        code: string;
        /**
         * Representative name of the section.
         *
         * @title Representative name of the section
        */
        name: string;
        /**
         * Creation time of record.
         *
         * @title Creation time of record
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
    export type IShoppingExternalUser = any;
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
    export namespace IShoppingSaleContent {
        export type IInvert = {
            id: string & tags.Format<"uuid">;
            title: string;
            thumbnails: AutoViewInputSubTypes.IAttachmentFile[];
        };
    }
    /**
     * Attachment File.
     *
     * Every attachment files that are managed in current system.
     *
     * For reference, it is possible to omit one of file {@link name}
     * or {@link extension} like `.gitignore` or `README` case, but not
     * possible to omit both of them.
    */
    export type IAttachmentFile = {
        /**
         * Primary Key.
         *
         * @title Primary Key
        */
        id: string;
        /**
         * Creation time of attachment file.
         *
         * @title Creation time of attachment file
        */
        created_at: string;
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
    export namespace IShoppingChannelCategory {
        /**
         * Invert category information with parent category.
        */
        export type IInvert = {
            /**
             * Parent category info with recursive structure.
             *
             * If no parent exists, then be `null`.
             *
             * @title Parent category info with recursive structure
            */
            parent: null | any;
            /**
             * Primary Key.
             *
             * @title Primary Key
            */
            id: string;
            /**
             * Identifier code of the category.
             *
             * The code must be unique in the channel.
             *
             * @title Identifier code of the category
            */
            code: string;
            /**
             * Parent category's ID.
             *
             * @title Parent category's ID
            */
            parent_id: null | (string & tags.Format<"uuid">);
            /**
             * Representative name of the category.
             *
             * The name must be unique within the parent category. If no parent exists,
             * then the name must be unique within the channel between no parent
             * categories.
             *
             * @title Representative name of the category
            */
            name: string;
            /**
             * Creation time of record.
             *
             * @title Creation time of record
            */
            created_at: string;
        };
    }
    export namespace IShoppingSaleUnit {
        export type IInvert = {
            /**
             * List of final stocks.
             *
             * @title List of final stocks
            */
            stocks: AutoViewInputSubTypes.IShoppingSaleUnitStock.IInvert[];
            /**
             * Primary Key.
             *
             * @title Primary Key
            */
            id: string;
            /**
             * Representative name of the unit.
             *
             * @title Representative name of the unit
            */
            name: string;
            /**
             * Whether the unit is primary or not.
             *
             * Just a labeling value.
             *
             * @title Whether the unit is primary or not
            */
            primary: boolean;
            /**
             * Whether the unit is required or not.
             *
             * When the unit is required, the customer must select the unit. If do not
             * select, customer can't buy it.
             *
             * For example, if there's a sale "Macbook Set" and one of the unit is the
             * "Main Body", is it possible to buy the "Macbook Set" without the
             * "Main Body" unit? This property is for that case.
             *
             * @title Whether the unit is required or not
            */
            required: boolean;
        };
    }
    export namespace IShoppingSaleUnitStock {
        /**
         * Invert information from the cart.
        */
        export type IInvert = {
            /**
             * Primary Key.
             *
             * @title Primary Key
            */
            id: string;
            /**
             * Representative name of the stock.
             *
             * @title Representative name of the stock
            */
            name: string;
            /**
             * Price of the stock.
             *
             * @title Price of the stock
            */
            price: AutoViewInputSubTypes.IShoppingPrice;
            /**
             * Quantity of the stock in the cart.
             *
             * @title Quantity of the stock in the cart
            */
            quantity: number & tags.Type<"int32">;
            /**
             * Current inventory status of the stock.
             *
             * @title Current inventory status of the stock
            */
            inventory: AutoViewInputSubTypes.IShoppingSaleUnitStockInventory;
            /**
             * List of choices.
             *
             * Which values being written for each option.
             *
             * @title List of choices
            */
            choices: AutoViewInputSubTypes.IShoppingSaleUnitStockChoice.IInvert[];
        };
    }
    /**
     * Shopping price interface.
    */
    export type IShoppingPrice = {
        /**
         * Nominal price.
         *
         * This is not {@link real real price} to pay, but just a nominal price to show.
         * If this value is greater than the {@link real real price}, it would be shown
         * like {@link IShoppingSeller seller} is giving a discount.
         *
         * @title Nominal price
        */
        nominal: number;
        /**
         * Real price to pay.
         *
         * @title Real price to pay
        */
        real: number;
    };
    /**
     * Inventory information of a final stock.
    */
    export type IShoppingSaleUnitStockInventory = {
        /**
         * Total income quantity.
         *
         * @title Total income quantity
        */
        income: number & tags.Type<"int32">;
        /**
         * Total outcome quantity.
         *
         * @title Total outcome quantity
        */
        outcome: number & tags.Type<"int32">;
    };
    export namespace IShoppingSaleUnitStockChoice {
        /**
         * Invert information from the cart.
        */
        export type IInvert = {
            /**
             * Primary Key.
             *
             * @title Primary Key
            */
            id: string;
            /**
             * Target option.
             *
             * @title Target option
            */
            option: any | any;
            /**
             * Selected candidate value.
             *
             * @title Selected candidate value
            */
            candidate: null | any;
            /**
             * Written value.
             *
             * @title Written value
            */
            value: null | string | number | boolean;
        };
    }
    export namespace IShoppingSaleUnitSelectableOption {
        export type IInvert = any;
    }
    export type IShoppingSaleUnitDescriptiveOption = any;
    export type IShoppingSaleUnitOptionCandidate = any;
}
export type AutoViewInput = AutoViewInputSubTypes.IShoppingCartCommodity;



// The component name must always be "VisualComponent"
export default function VisualComponent(value: AutoViewInput): React.ReactNode {
  // 1. Define data aggregation/transformation functions or derived constants if necessary.
  const { sale, volume, price, orderable, pseudo, created_at } = value;
  const title = sale.content.title;
  const imageUrl = sale.content.thumbnails?.[0]?.url || "";
  const sellerName = sale.seller.member.nickname;
  const sectionName = sale.section.name;
  const unitReal = price.real;
  const unitNominal = price.nominal;
  const totalReal = unitReal * volume;
  const totalNominal = unitNominal * volume;
  const formattedDate = new Date(created_at).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  const displayTags = sale.tags || [];
  const maxTags = 3;
  const visibleTags = displayTags.slice(0, maxTags);
  const moreTagCount = displayTags.length - maxTags;

  const formatMoney = (amount: number) =>
    amount.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

  // 2. Compose the visual structure using JSX and Tailwind CSS.
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
      <div className="w-full h-48 md:w-32 md:h-auto flex-shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-1">
        <header>
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {title}
          </h3>
          <div className="flex flex-wrap gap-2 mt-1">
            {!orderable && (
              <span className="px-2 py-0.5 bg-red-100 text-red-800 text-xs rounded">
                Ordered
              </span>
            )}
            {pseudo && (
              <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded">
                Promo
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-2 truncate">
            {sellerName} · {sectionName}
          </p>
          {displayTags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {visibleTags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
              {moreTagCount > 0 && (
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                  +{moreTagCount}
                </span>
              )}
            </div>
          )}
        </header>

        <dl className="mt-4 grid grid-cols-2 gap-y-2 text-sm text-gray-700">
          <dt className="font-medium">Unit Price</dt>
          <dd className="flex items-baseline">
            <span className="font-semibold">${formatMoney(unitReal)}</span>
            {unitNominal > unitReal && (
              <span className="ml-2 text-gray-500 line-through">
                ${formatMoney(unitNominal)}
              </span>
            )}
          </dd>

          <dt className="font-medium">Quantity</dt>
          <dd>{volume}</dd>

          <dt className="font-medium">Total</dt>
          <dd className="font-semibold">${formatMoney(totalReal)}</dd>

          <dt className="font-medium">Added</dt>
          <dd>{formattedDate}</dd>
        </dl>
      </div>
    </article>
  );
}
