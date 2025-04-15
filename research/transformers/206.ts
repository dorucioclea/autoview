import { tags } from "typia";
import type * as IAutoView from "@autoview/interface";
/**
 * Question about sale snapshot.
 *
 * `IShoppingSaleQuestion` is a subtype entity of {@link IShoppingSaleInquiry},
 * and is used when a {@link IShoppingCustomer customer} wants to ask something
 * about a {@link IShoppingSale sale} ({@link IShoppingSaleSnapshot snapshot} at
 * the time) registered by the {@link IShoppingSeller seller}.
 *
 * And, like most shopping malls, `IShoppingSaleQuestion` also provides
 * a {@link secret} attribute, allowing you to create a "secret message" that can
 * only be viewed by the seller and the customer who wrote the question.
*/
type IShoppingSaleQuestion = {
    /**
     * Whether the question article is secret or not.
     *
     * If secret article, only the writer customer and related seller can see
     * the detailed content.
     *
     * @title Whether the question article is secret or not
    */
    secret: boolean;
    /**
     * Type of the derived inquiry.
     *
     * - `question`: {@link IShoppingSaleQuestion}
     * - `review`: {@link IShoppingSaleReview}
     *
     * @title Type of the derived inquiry
    */
    type: "question";
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
     * List of snapshot contents.
     *
     * It is created for the first time when an article is created, and is
     * accumulated every time the article is modified.
     *
     * @title List of snapshot contents
    */
    snapshots: IBbsArticle.ISnapshot[];
    /**
     * Creation time of article.
     *
     * @title Creation time of article
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
type IShoppingSaleInquiryAnswer = any;
namespace IBbsArticle {
    /**
     * Snapshot of article.
     *
     * `IBbsArticle.ISnapshot` is a snapshot entity that contains the contents of
     * the article, as mentioned in {@link IBbsArticle}, the contents of the article
     * are separated from the article record to keep evidence and prevent fraud.
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
         * In other words, creation time or update time or article.
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
         * Title of article.
         *
         * @title Title of article
        */
        title: string;
        /**
         * Content body of article.
         *
         * @title Content body of article
        */
        body: string;
        /**
         * List of attachment files.
         *
         * @title List of attachment files
        */
        files: IAttachmentFile.ICreate[];
    };
}
namespace IAttachmentFile {
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
type IAutoViewTransformerInputType = IShoppingSaleQuestion;
export function transform($input: IAutoViewTransformerInputType): IAutoView.IAutoViewComponentProps {
    return visualizeData($input);
}



function visualizeData(input: IAutoViewTransformerInputType): IAutoView.IAutoViewComponentProps {
  // We use a VerticalCard to present the sale question in a card format.
  // The card will contain a header with an icon and secret indicator,
  // a content area showing the snapshot details in markdown,
  // and an optional footer displaying the seller's answer if available.

  // Extract the most recent snapshot (if any) for display
  const snapshot = input.snapshots && input.snapshots.length > 0 
    ? input.snapshots[input.snapshots.length - 1] 
    : null;

  // Compose markdown content from snapshot data (if available)
  let markdownContent = "";
  if (snapshot) {
    // Use markdown header for the snapshot title and then the body.
    markdownContent = `# ${snapshot.title}\n\n${snapshot.body}`;
  } else {
    markdownContent = "_No additional details available._";
  }

  // Compose the CardHeader.
  // - Display a fixed title identifying the inquiry and the customer.
  // - Use a question icon as the start element.
  // - If the question is secret, show a lock icon as the end element.
  const cardHeader: IAutoView.IAutoViewCardHeaderProps = {
    type: "CardHeader",
    title: `Sale Question (${input.id})`,
    description: `Asked by Customer: ${input.customer?.id || "Unknown"} at ${input.created_at}`,
    startElement: {
      type: "Icon",
      id: "question", // using "question" icon to denote inquiry
      color: "blue",
      size: 24,
    },
    // Conditionally add a lock icon for secret questions.
    endElement: input.secret
      ? {
          type: "Icon",
          id: "lock", // using "lock" icon to indicate secret content
          color: "red",
          size: 16,
        }
      : undefined,
  };

  // Compose the CardContent using a Markdown component to render rich text.
  const cardContent: IAutoView.IAutoViewCardContentProps = {
    type: "CardContent",
    childrenProps: {
      type: "Markdown",
      content: markdownContent,
    },
  };

  // Optionally, if an answer is provided, compose the CardFooter.
  // We assume answer is a string. If not, we convert it to a string representation.
  let cardFooter: IAutoView.IAutoViewCardFooterProps | undefined = undefined;
  if (input.answer !== null && input.answer !== undefined) {
    const answerText = typeof input.answer === "string" ? input.answer : JSON.stringify(input.answer);
    cardFooter = {
      type: "CardFooter",
      childrenProps: {
        type: "Markdown",
        content: `**Seller Answer:**\n\n${answerText}`,
      },
    };
  }

  // Aggregate the components in a VerticalCard.
  // The card's childrenProps accepts an array of presentation components.
  const verticalCard: IAutoView.IAutoViewVerticalCardProps = {
    type: "VerticalCard",
    childrenProps: cardFooter
      ? [ cardHeader, cardContent, cardFooter ]
      : [ cardHeader, cardContent ],
  };

  // Return the visualized data component.
  return verticalCard;
}
