import { tags } from "typia";
import React, { JSX } from "react";
import * as LucideReact from "lucide-react";
export namespace AutoViewInputSubTypes {
    export namespace IPageIShoppingSaleSnapshot {
        /**
         * A page.
         *
         * Collection of records with pagination indformation.
        */
        export interface ISummary {
            /**
             * Page information.
             *
             * @title Page information
            */
            pagination: AutoViewInputSubTypes.IPage.IPagination;
            /**
             * List of records.
             *
             * @title List of records
            */
            data: AutoViewInputSubTypes.IShoppingSaleSnapshot.ISummary[];
        }
    }
    export namespace IPage {
        /**
         * Page information.
        */
        export interface IPagination {
            /**
             * Current page number.
             *
             * @title Current page number
            */
            current: number & tags.Type<"int32">;
            /**
             * Limitation of records per a page.
             *
             * @title Limitation of records per a page
            */
            limit: number & tags.Type<"int32">;
            /**
             * Total records in the database.
             *
             * @title Total records in the database
            */
            records: number & tags.Type<"int32">;
            /**
             * Total pages.
             *
             * Equal to {@link records} / {@link limit} with ceiling.
             *
             * @title Total pages
            */
            pages: number & tags.Type<"int32">;
        }
    }
    export namespace IShoppingSaleSnapshot {
        /**
         * Summarized information of the sale snapshot.
        */
        export interface ISummary {
            /**
             * Price range of the unit.
             *
             * @title Price range of the unit
            */
            price_range: AutoViewInputSubTypes.IShoppingSalePriceRange;
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
            units: AutoViewInputSubTypes.IShoppingSaleUnit.ISummary[];
        }
    }
    export interface IShoppingSalePriceRange {
        lowest: AutoViewInputSubTypes.IShoppingPrice;
        highest: AutoViewInputSubTypes.IShoppingPrice;
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
    export namespace IShoppingSaleContent {
        export interface IInvert {
            id: string & tags.Format<"uuid">;
            title: string;
            thumbnails: AutoViewInputSubTypes.IAttachmentFile[];
        }
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
    export namespace IShoppingSaleUnit {
        export interface ISummary {
            price_range: AutoViewInputSubTypes.IShoppingSalePriceRange;
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
    }
}
export type AutoViewInput = AutoViewInputSubTypes.IPageIShoppingSaleSnapshot.ISummary;



// The component name must always be "VisualComponent"
export default function VisualComponent(value: AutoViewInput): React.ReactNode {
  // 1. Define data aggregation/transformation functions or derived constants if necessary.
  const formatCurrency = (amount: number): string =>
    new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2,
    }).format(amount);

  const getCategoryPath = (cat: AutoViewInputSubTypes.IShoppingChannelCategory.IInvert): string => {
    const names: string[] = [];
    let current: AutoViewInputSubTypes.IShoppingChannelCategory.IInvert | null = cat;
    while (current) {
      names.unshift(current.name);
      current = current.parent;
    }
    return names.join(' > ');
  };

  const placeholderUrl = 'https://placehold.co/400x300/f1f5f9/64748b?text=No+Image';
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = placeholderUrl;
  };

  const { pagination, data } = value;

  // 2. Compose the visual structure using JSX and Tailwind CSS.
  // 3. Return the React element.
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((record) => (
          <div
            key={record.snapshot_id}
            className="bg-white rounded-lg shadow-md flex flex-col overflow-hidden"
          >
            {/* Image & Title */}
            <div className="relative w-full aspect-[4/3] bg-gray-100">
              {record.content.thumbnails[0]?.url ? (
                <img
                  src={record.content.thumbnails[0].url}
                  alt={record.content.title}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <LucideReact.Image size={32} />
                </div>
              )}
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                {record.content.title}
              </h3>

              {/* Price Range */}
              <div className="flex items-baseline space-x-2 mb-3">
                <span className="text-sm text-gray-500">From</span>
                {record.price_range.lowest.nominal > record.price_range.lowest.real ? (
                  <>
                    <span className="text-gray-400 line-through text-sm">
                      {formatCurrency(record.price_range.lowest.nominal)}
                    </span>
                    <span className="text-green-600 font-medium">
                      {formatCurrency(record.price_range.lowest.real)}
                    </span>
                  </>
                ) : (
                  <span className="text-gray-800 font-medium">
                    {formatCurrency(record.price_range.lowest.real)}
                  </span>
                )}
                <span className="text-sm text-gray-500">to</span>
                <span className="text-gray-800 font-medium">
                  {formatCurrency(record.price_range.highest.real)}
                </span>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-1 mb-3">
                {record.categories.map((cat, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded"
                  >
                    {getCategoryPath(cat)}
                  </span>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-3">
                {record.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded"
                  >
                    <LucideReact.Tag className="mr-1 text-gray-500" size={12} />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Units */}
              <div className="flex flex-wrap gap-1 mb-4">
                {record.units.slice(0, 3).map((unit) => (
                  <span
                    key={unit.id}
                    className={`text-xs px-2 py-0.5 rounded ${
                      unit.primary
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {unit.name}
                    {unit.required && <span className="ml-0.5 text-red-500">*</span>}
                  </span>
                ))}
                {record.units.length > 3 && (
                  <span className="text-xs text-gray-600 px-2 py-0.5">
                    +{record.units.length - 3} more
                  </span>
                )}
              </div>

              {/* Latest Indicator */}
              <div className="mt-auto pt-2 border-t border-gray-200 flex items-center text-sm text-gray-600">
                {record.latest ? (
                  <LucideReact.CheckCircle
                    className="text-green-500 mr-1"
                    size={16}
                  />
                ) : (
                  <LucideReact.XCircle className="text-gray-400 mr-1" size={16} />
                )}
                <span>{record.latest ? 'Latest Snapshot' : 'Snapshot'}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Info */}
      <div className="text-center text-gray-600 text-sm">
        <LucideReact.ListChecks className="inline-block mr-1" size={16} />
        Page {pagination.current} of {pagination.pages} &middot; Total: {pagination.records}
      </div>
    </div>
  );
}
