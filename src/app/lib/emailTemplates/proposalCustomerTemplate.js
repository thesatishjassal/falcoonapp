export function getProposalCustomerTemplate({ selections, total }) {
  const name = selections.contact.name;
  const date = new Date().toLocaleDateString("en-IN");
  const quoteId = "FAL-" + Math.floor(Math.random() * 10000);

  return `
  <div style="background:#f6f7fb;padding:40px 0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">

          <table width="640" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;padding:32px;">
            
            <!-- HEADER -->
            <tr>
              <td>
                <table width="100%">
                  <tr>
                    <td>
                      <img src="https://d3v0px0pttie1i.cloudfront.net/uploads/branding/logo/8969127b-f40f-4ec1-beef-4e20cdc207b4/d189eed8.png" style="height:50px;" />
                    </td>
                    <td align="right">
                      <p style="margin:0;font-size:12px;color:#9aa0a6;">QUOTATION</p>
                      <h2 style="margin:4px 0 0;font-size:18px;">#${quoteId}</h2>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- META -->
            <tr>
              <td style="padding-top:24px;">
                <table width="100%">
                  <tr>
                    <td>
                      <p style="margin:0;font-size:12px;color:#9aa0a6;">Prepared For</p>
                      <p style="margin:4px 0;font-weight:500;">${name}</p>
                      <p style="margin:0;font-size:13px;color:#5f6368;">${selections.contact.email}</p>
                    </td>
                    <td align="right">
                      <p style="margin:0;font-size:12px;color:#9aa0a6;">Date</p>
                      <p style="margin:4px 0;">${date}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- DIVIDER -->
            <tr>
              <td style="padding:20px 0;">
                <div style="height:1px;background:#eaecef;"></div>
              </td>
            </tr>

            <!-- TABLE -->
            <tr>
              <td>
                <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                  
                  <tr style="background:#f8f9fa;">
                    <th align="left" style="padding:12px;font-size:12px;color:#9aa0a6;">ITEM</th>
                    <th align="right" style="padding:12px;font-size:12px;color:#9aa0a6;">PRICE</th>
                  </tr>

                  ${row("Launch Setup", selections.launch.label, selections.launch.price)}
                  ${row("Payment Integration", selections.payment.label, selections.payment.price)}
                  ${row("Automation", selections.automation.label || "Not Included", selections.automation.price)}
                  ${row("Hosting", selections.hosting.label, selections.hosting.price)}

                  ${
                    selections.addons.clientDashboard
                      ? row("Client Dashboard", "Included", 2999)
                      : ""
                  }

                </table>
              </td>
            </tr>

            <!-- TOTAL -->
            <tr>
              <td style="padding-top:20px;">
                <table width="100%">
                  <tr>
                    <td></td>
                    <td width="200">
                      <table width="100%">
                        <tr>
                          <td style="font-size:13px;color:#5f6368;">Total</td>
                          <td align="right" style="font-size:22px;font-weight:600;">
                            ₹${total}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- MESSAGE -->
            <tr>
              <td style="padding-top:24px;">
                <p style="font-size:14px;color:#5f6368;line-height:1.6;">
                  We’ll review your requirements and connect with you shortly to move forward.
                </p>
              </td>
            </tr>

            <!-- CTA -->
            <tr>
              <td style="padding-top:20px;">
                <a href="https://calendly.com/thesatishjassal/falcoon-fitness-business-strategy-call"
                  style="display:inline-block;padding:12px 20px;background:#530A4E;color:#fff;
                  border-radius:8px;text-decoration:none;font-size:14px;margin-right:10px;">
                  Schedule Call
                </a>

                <a href="https://wa.me/917888467258"
                  style="display:inline-block;padding:12px 20px;background:#f1f3f4;
                  color:#202124;border-radius:8px;text-decoration:none;font-size:14px;">
                  WhatsApp
                </a>
              </td>
            </tr>

            <!-- FOOTER -->
            <tr>
              <td style="padding-top:30px;">
                <div style="height:1px;background:#eaecef;"></div>
              </td>
            </tr>

            <tr>
              <td style="padding-top:12px;">
                <p style="font-size:12px;color:#9aa0a6;margin:0;">
                  Falcoon • Build • Automate • Scale
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

function row(title, subtitle, price) {
  return `
    <tr>
      <td style="padding:12px;border-bottom:1px solid #eee;">
        <p style="margin:0;font-size:14px;">${title}</p>
        <p style="margin:2px 0 0;font-size:12px;color:#9aa0a6;">${subtitle}</p>
      </td>
      <td align="right" style="padding:12px;border-bottom:1px solid #eee;">
        ₹${price}
      </td>
    </tr>
  `;
}
