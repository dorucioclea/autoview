import { tags } from "typia";
import React, { JSX } from "react";
import * as LucideReact from "lucide-react";
export namespace AutoViewInputSubTypes {
    /**
     * Snapshot record of sale.
     *
     * `IShoppingSaleSnapshot` is an entity that embodies a snapshot of a sale,
     * and the ERD (Entity Relationship Diagram) describes the role of the
     * `shopping_sale_snapshots` table as follows:
     *
     * > {@link IShoppingSale shopping_sales} is an entity that embodies
     * > "product sales" (sales) information registered by the
     * > {@link IShoppingSeller seller}. And the main information of the sale is
     * > recorded in the sub `shopping_sale_snapshots`, not in the main
     * > {@link IShoppingSale shopping_sales}. When a seller changes a previously
     * > registered item, the existing {@link IShoppingSale shopping_sales} record
     * > is not changed, but a new snapshot record is created.
     * >
     * > This is to preserve the {@link IShoppingCustomer customer}'s
     * > {@link IShoppingOrder purchase history} flawlessly after the customer
     * > purchases a specific item, even if the seller changes the components or price
     * > of the item. It is also intended to support sellers in so-called A/B testing,
     * > which involves changing components or prices and measuring the performance
     * > in each case.
     *
     * By the way, DTO (Data Transfer Object) level used by the front-end developer,
     * it does not distinguish {@link IShoppingSale} and `IShoppingSaleSnapshot`
     * strictly, and generally handles {@link IShoppingSale} and snapshot together.
     *
     * But even though the DTO level does not strictly distinguish them, the word and
     * concept of "snapshot" is still important, so it is recommended to understand
     * the concept of "snapshot" properly.
    */
    export interface IShoppingSaleSnapshot {
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
        content: AutoViewInputSubTypes.IShoppingSaleContent;
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
        units: AutoViewInputSubTypes.IShoppingSaleUnit[];
    }
    /**
     * Content information of sale snapshot.
     *
     * `IShoppingSaleContent` is an entity embodies the description contents
     * of {@link IShoppingSale}.
    */
    export interface IShoppingSaleContent {
        /**
         * Primary Key.
         *
         * @title Primary Key
        */
        id: string;
        /**
         * Title of the content.
         *
         * @title Title of the content
        */
        title: string;
        /**
         * Format of the body content.
         *
         * Same meaning with file extension like `html`, `md`, and `txt`.
         *
         * @title Format of the body content
        */
        format: "html" | "md" | "txt";
        /**
         * The main body content.
         *
         * Format follows the {@link format}, and default is `md` (markdown).
         *
         * @title The main body content
        */
        body: string;
        /**
         * List of attached files.
         *
         * @title List of attached files
        */
        files: AutoViewInputSubTypes.IAttachmentFile[];
        /**
         * List of thumbnails.
         *
         * @title List of thumbnails
        */
        thumbnails: AutoViewInputSubTypes.IAttachmentFile[];
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
    export interface IAttachmentFile {
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
    }
    export namespace IShoppingChannelCategory {
        /**
         * Invert category information with parent category.
        */
        export interface IInvert {
            /**
             * Parent category info with recursive structure.
             *
             * If no parent exists, then be `null`.
             *
             * @title Parent category info with recursive structure
            */
            parent: null | AutoViewInputSubTypes.IShoppingChannelCategory.IInvert;
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
        }
    }
    /**
     * Product composition information handled in the sale.
     *
     * `IShoppingSaleUnit` is an entity that embodies the "individual product"
     * information handled in the {@link IShoppingSale sale}.
     *
     * For reference, the reason why `IShoppingSaleUnit` is separated from
     * {@link IShoppingSaleSnapshot} by an algebraic relationship of 1: N is because
     * there are some cases where multiple products are sold in one listing. This is
     * the case with so-called "bundled products".
     *
     * - Bundle from regular product (Mackbook Set)
     *   - Main Body
     *   - Keyboard
     *   - Mouse
     *   - Apple Care (Free A/S Voucher)
     *
     * And again, `IShoppingSaleUnit` does not in itself refer to the
     * {@link IShoppingSaleUnitStock final stock} that the
     * {@link IShoppingCustomer customer} will {@link IShoppingOrder purchase}.
     * The final stock can be found only after selecting all given
     * {@link IShoppingSaleUnitOption options} and their
     * {@link IShoppingSaleUnitOptionCandidate candidate values}.
     *
     * For example, even if you buy a Macbook, the final stocks are determined only
     * after selecting all the options (CPU / RAM / SSD), etc.
    */
    export interface IShoppingSaleUnit {
        /**
         * List of options.
         *
         * @title List of options
        */
        options: (AutoViewInputSubTypes.IShoppingSaleUnitSelectableOption | AutoViewInputSubTypes.IShoppingSaleUnitDescriptiveOption)[];
        /**
         * List of final stocks.
         *
         * @title List of final stocks
        */
        stocks: AutoViewInputSubTypes.IShoppingSaleUnitStock[];
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
    }
    /**
     * Individual option information on units for sale.
     *
     * `IShoppingSaleUnitSelectableOption` is a subsidiary entity of
     * {@link IShoppingSaleUnit} that represents individual products in the
     * {@link IShoppingSale sale}, and is an entity designed to represent individual
     * selectable option information for the unit.
     *
     * - Examples of Options
     *   - selectable options
     *     - Computer: CPU, RAM, SSD, etc.
     *     - Clothes: size, color, style, etc.
     *   - descriptive options
     *     - Engrave
     *     - Simple question
     *
     * If the {@link variable} property value is `true`, the final stock that the
     * {@link IShoppingCustomer customer} will purchase changes depending on the
     * selection of the {@link IShoppingSaleUnitOptionCandidate candidate value}.
     *
     * Conversely, if it is a type other than "select", or if the {@link variable}
     * property value is "false", , this is an option that has no meaning beyond
     * simple information transfer. Therefore, no matter what value the customer
     * chooses when purchasing it, the option in this case does not affect the
     * {@link IShoppingSaleUnitStock final stock}.
    */
    export interface IShoppingSaleUnitSelectableOption {
        /**
         * List of candidate values.
         *
         * @title List of candidate values
        */
        candidates: AutoViewInputSubTypes.IShoppingSaleUnitOptionCandidate[];
        /**
         * Primary Key.
         *
         * @title Primary Key
        */
        id: string;
        /**
         * Discriminant for the type of selectable option.
         *
         * @title Discriminant for the type of selectable option
        */
        type: "select";
        /**
         * Represents the name of the option.
         *
         * @title Represents the name of the option
        */
        name: string;
        /**
         * Whether the option is variable or not.
         *
         * When type of current option is "select", this attribute means whether
         * selecting different candidate value affects the final stock or not.
         *
         * @title Whether the option is variable or not
        */
        variable: boolean;
    }
    /**
     * Selectable candidate values within an option.
     *
     * `IShoppingSaleUnitOptionCandidate` is an entity that represents individual
     * candidate values that can be selected from
     * {@link IShoppingSaleUnitSelectableOption options of the "select" type}.
     *
     * - Example
     *   - RAM: 8GB, 16GB, 32GB
     *   - GPU: RTX 3060, RTX 4080, TESLA
     *   - License: Private, Commercial, Educatiion
     *
     * By the way, if belonged option is not "select" type, this entity never
     * being used.
    */
    export interface IShoppingSaleUnitOptionCandidate {
        /**
         * Primary Key.
         *
         * @title Primary Key
        */
        id: string;
        /**
         * Represents the name of the candidate value.
         *
         * @title Represents the name of the candidate value
        */
        name: string;
    }
    /**
     * Descriptive option.
     *
     * When type of the option not `"select"`, it means the option is descriptive
     * that requiring {@link IShoppingCustomer customers} to write some value to
     * {@link IShoppingOrder purchase}. Also, whatever customer writes about the
     * option, it does not affect the {@link IShoppingSaleUnitStock final stock}.
     *
     * Another words, the descriptive option is just for information transfer.
    */
    export interface IShoppingSaleUnitDescriptiveOption {
        /**
         * Primary Key.
         *
         * @title Primary Key
        */
        id: string;
        /**
         * Type of descriptive option.
         *
         * Which typed value should be written when purchasing.
         *
         * @title Type of descriptive option
        */
        type: "string" | "number" | "boolean";
        /**
         * Readable name of the option.
         *
         * @title Readable name of the option
        */
        name: string;
    }
    /**
     * Final component information on units for sale.
     *
     * `IShoppingSaleUnitStock` is a subsidiary entity of {@link IShoppingSaleUnit}
     * that represents a product catalog for sale, and is a kind of final stock that is
     * constructed by selecting all {@link IShoppingSaleUnitSelectableOption options}
     * (variable "select" type) and their
     * {@link IShoppingSaleUnitOptionCandidate candidate} values in the belonging unit.
     * It is the "good" itself that customers actually purchase.
     *
     * - Product Name) MacBook
     *   - Options
     *     - CPU: { i3, i5, i7, i9 }
     *     - RAM: { 8GB, 16GB, 32GB, 64GB, 96GB }
     *     - SSD: { 256GB, 512GB, 1TB }
     *   - Number of final stocks: 4 * 5 * 3 = 60
     *
     * For reference, the total number of `IShoppingSaleUnitStock` records in an
     * attribution unit can be obtained using Cartesian Product. In other words, the
     * value obtained by multiplying all the candidate values that each
     * (variable "select" type) option can have by the number of cases is the total
     * number of final stocks in the unit.
     *
     * Of course, without a single variable "select" type option, the final stocks
     * count in the unit is only 1.
    */
    export interface IShoppingSaleUnitStock {
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
         * Current inventory status of the stock.
         *
         * @title Current inventory status of the stock
        */
        inventory: AutoViewInputSubTypes.IShoppingSaleUnitStockInventory;
        /**
         * List of choices.
         *
         * Which candidate values being chosen for each option.
         *
         * @title List of choices
        */
        choices: AutoViewInputSubTypes.IShoppingSaleUnitStockChoice[];
    }
    /**
     * Shopping price interface.
    */
    export interface IShoppingPrice {
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
    }
    /**
     * Inventory information of a final stock.
    */
    export interface IShoppingSaleUnitStockInventory {
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
    }
    /**
     * Selection information of final stock.
     *
     * `IShoppingSaleUnitStockChoice` is an entity that represents which
     * {@link IShoppingSaleUnitSelectableOption option} of each variable "select"
     * type was selected for each {@link IShoppingSaleUnitStock stock} and which
     * {@link IShoppingSaleUnitOptionCandidate candidate value} was selected within
     * it.
     *
     * Of course, if the bound {@link IShoppingSaleUnit unit} does not have any
     * options, this entity can also be ignored.
    */
    export interface IShoppingSaleUnitStockChoice {
        /**
         * Primary Key.
         *
         * @title Primary Key
        */
        id: string;
        /**
         * Target option's {@link IShoppingSaleUnitOption.id}
        */
        option_id: string;
        /**
         * Target candidate's {@link IShoppingSaleUnitOptionCandidate.id}
        */
        candidate_id: string;
    }
}
export type AutoViewInput = AutoViewInputSubTypes.IShoppingSaleSnapshot;



// The component name must always be "VisualComponent"
export default function VisualComponent(value: AutoViewInput): React.ReactNode {
  // 1. Define data aggregation/transformation functions or derived constants if necessary.
  const formatNumber = (n: number) => n.toLocaleString();
  const formatPriceRange = (prices: number[]) => {
    if (prices.length === 0) return "-";
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    const fmtMin = formatNumber(min);
    const fmtMax = formatNumber(max);
    return min === max ? fmtMin : `${fmtMin} - ${fmtMax}`;
  };

  // Build breadcrumb-like category paths
  const categoryPaths = value.categories.map((cat) => {
    const names: string[] = [];
    let current: AutoViewInputSubTypes.IShoppingChannelCategory.IInvert | null = cat;
    while (current) {
      names.unshift(current.name);
      current = current.parent;
    }
    return names.join(" / ");
  });

  // Summarize units
  const unitSummaries = value.units.map((unit) => {
    const prices = unit.stocks.map((s) => s.price.real);
    const inventory = unit.stocks.reduce(
      (sum, s) => sum + (s.inventory.income - s.inventory.outcome),
      0
    );
    return {
      id: unit.id,
      name: unit.name,
      primary: unit.primary,
      required: unit.required,
      priceRange: formatPriceRange(prices),
      inventory,
    };
  });

  // 2. Compose the visual structure using JSX and Tailwind CSS.
  return (
    <div className="p-4 bg-white rounded-lg shadow-md space-y-6 max-w-md mx-auto">
      {/* Header: Title and Latest Badge */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">
          {value.content.title}
        </h2>
        {value.latest && (
          <span className="inline-flex items-center px-2 py-0.5 bg-green-100 text-green-800 text-xs font-medium rounded">
            Latest
          </span>
        )}
      </div>

      {/* Thumbnails */}
      {value.content.thumbnails.length > 0 && (
        <div className="flex space-x-2 overflow-x-auto">
          {value.content.thumbnails.map((file) => (
            <img
              key={file.id}
              src={file.url}
              alt={value.content.title}
              className="w-16 h-16 flex-shrink-0 rounded object-cover bg-gray-100"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://placehold.co/48x48/e2e8f0/1e293b?text=Img";
              }}
            />
          ))}
        </div>
      )}

      {/* Categories */}
      {categoryPaths.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {categoryPaths.map((path, idx) => (
            <span
              key={idx}
              className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded"
            >
              {path}
            </span>
          ))}
        </div>
      )}

      {/* Tags */}
      {value.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {value.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded"
            >
              <LucideReact.Tag size={14} className="mr-1 text-gray-500" />
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Description */}
      <div>
        <p className="text-gray-700 text-sm line-clamp-3">
          {value.content.body}
        </p>
      </div>

      {/* Units Summary */}
      {unitSummaries.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-md font-medium text-gray-800">Variants</h3>
          {unitSummaries.map((u) => (
            <div
              key={u.id}
              className="flex items-center justify-between bg-gray-50 p-3 rounded"
            >
              <div className="flex items-center">
                <span className="text-gray-800 font-medium">{u.name}</span>
                {u.primary && (
                  <LucideReact.Star
                    size={16}
                    className="ml-1 text-yellow-400"
                    aria-label="Primary variant"
                    role="img"
                  />
                )}
                {u.required && (
                  <LucideReact.AlertTriangle
                    size={16}
                    className="ml-1 text-red-400"
                    aria-label="Required"
                    role="img"
                  />
                )}
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-gray-600">
                  <LucideReact.DollarSign
                    size={16}
                    className="mr-1 text-gray-500"
                  />
                  <span className="text-sm">{u.priceRange}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <LucideReact.Package
                    size={16}
                    className="mr-1 text-gray-500"
                  />
                  <span className="text-sm">{formatNumber(u.inventory)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
