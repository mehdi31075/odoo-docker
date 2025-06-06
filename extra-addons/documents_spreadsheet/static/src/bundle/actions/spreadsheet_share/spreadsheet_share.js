import { Component } from "@odoo/owl";
import { registries } from "@spreadsheet/o_spreadsheet/o_spreadsheet";
import { SpreadsheetShareButton } from "@spreadsheet/components/share_button/share_button";

const { topbarComponentRegistry } = registries;

export class DocumentsTopbarShareButton extends Component {
    static template = "spreadsheet_edition.DocumentsTopbarShareButton";
    static components = {
        SpreadsheetShareButton,
    };
    static props = {};
}

topbarComponentRegistry.add("documents_share_button", {
    component: DocumentsTopbarShareButton,
    isVisible: (env) => env.isFrozenSpreadsheet && !env.isFrozenSpreadsheet(),
    sequence: 25,
});
