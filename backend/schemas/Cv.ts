import { relationship, text, timestamp } from "@keystone-6/core/fields";
import { document } from "@keystone-6/fields-document";
import { list } from "@keystone-6/core";

export const Cv = list({
  ui: {
    listView: {
      initialColumns: ["title"],
    },
  },
  hooks: {
    resolveInput: ({ context, resolvedData }) => {
      const { session } = context;
      /*
       * resolvedData contains all
       */
      return {
        ...resolvedData,
        author: { connect: { id: session.itemId } },
      };
    },
  },
  fields: {
    title: text({
      validation: {
        isRequired: true,
      },
    }),
    introduction: text({
      ui: {
        displayMode: "textarea",
        createView: {
          fieldMode: "hidden",
        },
      },
    }),
    experiences: relationship({
      ref: "Experience",
      many: true,
      ui: {
        createView: {
          fieldMode: "hidden",
        },
        displayMode: "cards",
        cardFields: ["description", "from", "to"],
        inlineCreate: {
          fields: ["description", "from", "to"],
        },
        inlineEdit: {
          fields: ["description", "from", "to"],
        },
        removeMode: "disconnect",
      },
    }),
    author: relationship({
      ref: "User",
      many: false,
      ui: {
        createView: {
          // fieldMode: "hidden",
        },
        displayMode: "select",
      },
    }),
  },
});

export const Experience = list({
  fields: {
    from: timestamp({
      defaultValue: "2020-09-17T18:00:00.0000Z",
    }),
    to: timestamp({
      defaultValue: "2020-09-17T18:00:00.0000Z",
    }),
    description: document({
      formatting: true,
    }),
    cv: relationship({ ref: "Cv" }),
  },
});
