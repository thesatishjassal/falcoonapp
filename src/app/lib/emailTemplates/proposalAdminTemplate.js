export function getProposalAdminTemplate({ selections, total }) {
  return `
  <div style="margin:0;padding:0;background:#f6f7fb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
      <tr>
        <td align="center">

          <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;padding:32px;">
            
            <!-- LOGO -->
            <tr>
              <td style="padding-bottom:20px;">
                <img 
                  src="https://d3v0px0pttie1i.cloudfront.net/uploads/branding/logo/8969127b-f40f-4ec1-beef-4e20cdc207b4/d189eed8.png"
                  alt="Falcoon"
                  style="height:50px;"
                />
              </td>
            </tr>

            <!-- HEADER -->
            <tr>
              <td style="padding-bottom:16px;">
                <h2 style="margin:0;font-size:18px;color:#202124;">
                  New Proposal Request
                </h2>
                <p style="margin:6px 0 0;font-size:13px;color:#9aa0a6;">
                  Falcoon Funnel Builder
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:16px 0;">
                <div style="height:1px;background:#eaecef;"></div>
              </td>
            </tr>

            <!-- CUSTOMER INFO -->
            <tr>
              <td style="padding-bottom:20px;">
                <p style="margin:6px 0;"><strong>Name:</strong> ${selections.contact.name}</p>
                <p style="margin:6px 0;"><strong>Email:</strong> ${selections.contact.email}</p>
                <p style="margin:6px 0;"><strong>Phone:</strong> ${selections.contact.phone}</p>
              </td>
            </tr>

            <!-- PLAN DETAILS -->
            <tr>
              <td style="padding-bottom:20px;">
                <p style="margin:0 0 10px;font-size:13px;color:#9aa0a6;">Configuration</p>

                <div style="background:#f8f9fa;border-radius:8px;padding:14px;font-size:14px;">
                  <p>Launch: ${selections.launch.label} — ₹${selections.launch.price}</p>
                  <p>Payment: ${selections.payment.label} — ₹${selections.payment.price}</p>
                  <p>Automation: ${selections.automation.label || "None"} — ₹${selections.automation.price}</p>
                  <p>Hosting: ${selections.hosting.label} — ₹${selections.hosting.price}</p>
                  <p>Dashboard: ${
                    selections.addons.clientDashboard ? "Yes (₹2999)" : "No"
                  }</p>
                </div>
              </td>
            </tr>

            <!-- TOTAL -->
            <tr>
              <td style="padding-bottom:20px;">
                <div style="background:#f1f3f4;padding:16px;border-radius:8px;text-align:center;">
                  <p style="margin:0;font-size:13px;color:#5f6368;">Total Value</p>
                  <h2 style="margin:6px 0 0;">₹${total}</h2>
                </div>
              </td>
            </tr>

            <!-- CTA -->
            <tr>
              <td style="padding-bottom:20px;">
                <a href="mailto:${selections.contact.email}"
                  style="display:inline-block;padding:10px 16px;background:#530A4E;
                  color:#fff;text-decoration:none;border-radius:6px;font-size:13px;">
                  Reply to Client
                </a>
              </td>
            </tr>

            <!-- FOOTER -->
            <tr>
              <td style="padding-top:16px;">
                <div style="height:1px;background:#eaecef;"></div>
              </td>
            </tr>

            <tr>
              <td style="padding-top:12px;">
                <p style="margin:0;font-size:12px;color:#9aa0a6;">
                  Sent from Falcoon System
                </p>
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>
  </div>
  `;
}
