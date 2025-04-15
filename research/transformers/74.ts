import { tags } from "typia";
import type * as IAutoView from "@autoview/interface";
namespace IPageIShoppingSaleReview {
    /**
     * A page.
     *
     * Collection of records with pagination indformation.
    */
    export type ISummary = {
        /**
         * Page information.
         *
         * @title Page information
        */
        pagination: IPage.IPagination;
        /**
         * List of records.
         *
         * @title List of records
        */
        data: IShoppingSaleReview.ISummary[];
    };
}
namespace IPage {
    /**
     * Page information.
    */
    export type IPagination = {
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
    };
}
namespace IShoppingSaleReview {
    /**
     * Summarized information of the review.
    */
    export type ISummary = {
        /**
         * Score of the review.
         *
         * @title Score of the review
        */
        score: number;
        /**
         * Customer who wrote the inquiry.
         *
         * @title Customer who wrote the inquiry
        */
        customer: IShoppingCustomer;
        /**
         * Formal answer for the inquiry by the seller.
         *
         * @title Formal answer for the inquiry by the seller
        */
        answer: null | any;
        /**
         * Whether the seller has viewed the inquiry or not.
         *
         * @title Whether the seller has viewed the inquiry or not
        */
        read_by_seller: boolean;
        /**
         * Primary Key.
         *
         * @title Primary Key
        */
        id: string;
        /**
         * Title of the last snapshot.
         *
         * @title Title of the last snapshot
        */
        title: string;
        /**
         * Creation time of the article.
         *
         * @title Creation time of the article
        */
        created_at: string;
        /**
         * Modification time of the article.
         *
         * In other words, the time when the last snapshot was created.
         *
         * @title Modification time of the article
        */
        updated_at: string;
    };
}
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
type IShoppingCustomer = {
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
    channel: IShoppingChannel;
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
type IShoppingMember = any;
type IShoppingCitizen = any;
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
type IShoppingChannel = {
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
type IShoppingExternalUser = any;
namespace IShoppingSaleInquiryAnswer {
    export type ISummary = any;
}
type IAutoViewTransformerInputType = IPageIShoppingSaleReview.ISummary;
export function transform($input: IAutoViewTransformerInputType): IAutoView.IAutoViewComponentProps {
    return visualizeData($input);
}



function visualizeData(input: IAutoViewTransformerInputType): IAutoView.IAutoViewComponentProps {
  // Destructure the pagination info and list of review summaries from the input.
  const { pagination, data } = input;

  // Map each review record into a DataListItem component.
  // Each item displays the review title, score (visually represented with stars), and creation date.
  // It also includes a button showing the read status using an eye or eye-slash icon.
  const listItems: IAutoView.IAutoViewDataListItemProps[] = (data && data.length > 0)
    ? data.map((review) => {
        // Use markdown to create a rich text block that emphasizes the title and displays meta info.
        const markdownContent = `**${review.title}**  
Score: ${"⭐".repeat(Math.floor(review.score))}  
Created: ${review.created_at}`;

        // Build a button to indicate whether the review was read.
        // Using color coding and a representative icon makes the information more engaging.
        const readStatusButton: IAutoView.IAutoViewButtonProps = {
          type: "Button",
          variant: "contained",
          // Use "success" for a read review, "error" for an unread review.
          color: review.read_by_seller ? "success" : "error",
          label: review.read_by_seller ? "Read" : "Unread",
          // Use an icon to visually complement the text.
          startElement: {
            type: "Icon",
            // Use "eye" when read and "eye-slash" when not read.
            id: review.read_by_seller ? "eye" : "eye-slash",
            size: 16,
            color: review.read_by_seller ? "green" : "red"
          }
        };

        // Return a DataListItem with a markdown label and a button as its value.
        return {
          type: "DataListItem",
          label: {
            type: "Markdown",
            content: markdownContent
          },
          value: readStatusButton
        };
      })
    : [
        // If there are no reviews, show a fallback message using a markdown component.
        {
          type: "DataListItem",
          label: {
            type: "Markdown",
            content: "**No reviews available.**"
          }
        }
      ];

  // Compose a DataList component that will display all review items.
  const dataList: IAutoView.IAutoViewDataListProps = {
    type: "DataList",
    childrenProps: listItems
  };

  // Create a CardHeader component to give context to the review list.
  // It includes an icon (using the "list" icon) and displays the current page status.
  const cardHeader: IAutoView.IAutoViewCardHeaderProps = {
    type: "CardHeader",
    title: "Sales Reviews",
    description: `Page ${pagination.current} of ${pagination.pages}`,
    startElement: {
      type: "Icon",
      id: "list",
      size: 24,
      color: "blue"
    }
  };

  // Create a CardFooter component to display summary information such as the total records.
  const cardFooter: IAutoView.IAutoViewCardFooterProps = {
    type: "CardFooter",
    childrenProps: {
      type: "Text",
      variant: "caption",
      content: `Total records: ${pagination.records}`
    }
  };

  // Assemble a VerticalCard that contains the header, content (the data list wrapped in a card content), and the footer.
  // Using a vertical card layout ensures the UI is responsive and well-structured across devices.
  const verticalCard: IAutoView.IAutoViewVerticalCardProps = {
    type: "VerticalCard",
    childrenProps: [
      cardHeader,
      {
        type: "CardContent",
        childrenProps: dataList
      },
      cardFooter
    ]
  };

  // Return the fully composed UI component.
  return verticalCard;
}
