# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

from odoo import api, models


class ReportL10nBePDFReports28150(models.AbstractModel):
    _name = 'report.l10n_be_reports.report_281_50_pdf'
    _description = 'Get 281.50 report as PDF.'

    @api.model
    def _get_report_values(self, docids, data=None):
        return {
            'doc_ids': docids,
            'doc_model': self.env['l10n_be.form.281.50'],
            'data': data,
            'docs': docids,
        }
