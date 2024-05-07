type fieldOption = "text" | "select" | "password";

export interface formFieldsDef {
    name: string;
    label: string;
    fieldOption: fieldOption;
    selectOptions?: string[]
}

export const connectionsFormFields: formFieldsDef[] = [
    {
        name: "name",
        label: "Database name",
        fieldOption: "text",
    },
    {
        name: "url",
        label: "URL",
        fieldOption: "text",
    },
    {
        name: "username",
        label: "Username",
        fieldOption: "text",
    },
    {
        name: "password",
        label: "User Password",
        fieldOption: "password",
    },
    {
        name: "type",
        label: "Type",
        fieldOption: "select",
        selectOptions: ["Snowflake", "Trino", "MySQL"]
    }
]