import { tags } from "typia";
import type * as IAutoView from "@autoview/interface";
namespace Schema {
    export namespace IApiOrgsActionsRunnersLabels {
        export type _DeleteResponse = {
            total_count: number & tags.Type<"int32">;
            labels: Schema.runner_label[];
        };
    }
    /**
     * A label for a self hosted runner
     *
     * @title Self hosted runner label
    */
    export type runner_label = {
        /**
         * Unique identifier of the label.
        */
        id?: number & tags.Type<"int32">;
        /**
         * Name of the label.
        */
        name: string;
        /**
         * The type of label. Read-only labels are applied automatically when the runner is configured.
        */
        type?: "read-only" | "custom";
    };
}
type IAutoViewTransformerInputType = Schema.IApiOrgsActionsRunnersLabels._DeleteResponse;
export function transform($input: IAutoViewTransformerInputType): IAutoView.IAutoViewComponentProps {
    return visualizeData($input);
}



function visualizeData(input: IAutoViewTransformerInputType): IAutoView.IAutoViewComponentProps {
  // Transform each runner_label into a Chip component with an icon indicating its type.
  // Read-only labels get a lock icon and gray color; custom labels get a star icon and blue color.
  const chips: IAutoView.IAutoViewChipProps[] = input.labels.map((label) => {
    const isReadOnly = label.type === "read-only";
    return {
      type: "Chip",
      label: label.name,
      variant: "outlined",
      size: "medium",
      color: isReadOnly ? "gray" : "blue",
      startElement: {
        type: "Icon",
        id: isReadOnly ? "lock" : "star",
        color: isReadOnly ? "gray" : "blue",
        size: 16,
      },
    };
  });

  // Build the common card header showing the total count of labels.
  const header: IAutoView.IAutoViewCardHeaderProps = {
    type: "CardHeader",
    title: "Runner Labels",
    description: `${input.total_count} label${input.total_count === 1 ? "" : "s"}`,
    startElement: {
      type: "Icon",
      id: "tag",
      color: "cyan",
      size: 24,
    },
  };

  // If there are no labels, render a Markdown placeholder.
  if (chips.length === 0) {
    return {
      type: "VerticalCard",
      childrenProps: [
        header,
        {
          type: "CardContent",
          childrenProps: [
            {
              type: "Markdown",
              content: "_No labels available_",
            },
          ],
        },
      ],
    };
  }

  // Otherwise, render the chips inside a ChipGroup for visual presentation.
  return {
    type: "VerticalCard",
    childrenProps: [
      header,
      {
        type: "CardContent",
        childrenProps: [
          {
            type: "ChipGroup",
            // Let the ChipGroup handle wrapping; do not limit maxItems by default.
            childrenProps: chips,
          },
        ],
      },
    ],
  };
}
