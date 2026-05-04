export function getCustomerTemplate({ firstName }) {
  return `
  <div style="margin:0;padding:0;background-color:#f6f7fb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
      <tr>
        <td align="center">

          <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;padding:40px 32px;">
            
            <!-- Logo / Brand -->
            <tr>
              <td style="padding-bottom:24px;text-align:left;">
                <div style="font-size:18px;font-weight:600;color:#202124;letter-spacing:0.2px;">
                  <img src="https://d3v0px0pttie1i.cloudfront.net/uploads/branding/logo/8969127b-f40f-4ec1-beef-4e20cdc207b4/d189eed8.png" alt="Falcoon Logo" width="50" style="display:block;">
                </div>
              </td>
            </tr>

            <!-- Heading -->
            <tr>
              <td style="padding-bottom:16px;">
                <h1 style="margin:0;font-size:22px;font-weight:600;color:#202124;">
                  Hi ${firstName},
                </h1>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding-bottom:24px;">
                <p style="margin:0;font-size:14px;line-height:1.7;color:#5f6368;">
                  Thanks for reaching out. We've received your message and our team will get back to you within the next 24 hours.
                </p>
              </td>
            </tr>

            <!-- CTA -->
            <tr>
              <td style="padding-bottom:32px;">
                <a href="https://calendly.com/thesatishjassal/falcoon-fitness-business-strategy-call"
                  style="display:inline-block;padding:12px 20px;background:#530A4E;color:#ffffff;
                  text-decoration:none;border-radius:8px;font-size:14px;font-weight:500;">
                  Book Free Strategy Call
                </a>
              </td>
            </tr>

            <!-- Secondary Text -->
            <tr>
              <td style="padding-bottom:24px;">
                <p style="margin:0;font-size:13px;line-height:1.6;color:#5f6368;">
                  Need a quicker response? Simply reply to this email or reach out via WhatsApp.
                </p>
              </td>
            </tr>

            <!-- Divider -->
            <tr>
              <td style="padding:24px 0 16px 0;">
                <div style="height:1px;background:#eaecef;"></div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td>
                <p style="margin:0;font-size:12px;color:#9aa0a6;line-height:1.5;">
                  — Falcoon Team <br/>
                  Building systems that grow your business.
                </p>
              </td>
            </tr>

          </table>

          <!-- Footer Outside -->
          <table width="560" cellpadding="0" cellspacing="0" style="margin-top:16px;">
            <tr>
              <td style="text-align:center;">
                <p style="font-size:11px;color:#9aa0a6;margin:0;">
                  © ${new Date().getFullYear()} Falcoon. All rights reserved.
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
