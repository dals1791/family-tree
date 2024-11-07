import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
     schema: "http://localhost:4000/graphql",
     documents: ["api/**/*.tsx"],
     generates: {
        "./types/__generated__/": {
            preset: "client",
            presetConfig: {
                gqlTagName: "gql",
            },
        },
    }
};

export default config;