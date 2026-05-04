export function getAdminTemplate({
  firstName,
  lastName,
  email,
  phone,
  message,
}) {
  return `
  <div style="margin:0;padding:0;background-color:#f6f7fb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
      <tr>
        <td align="center">

          <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;padding:32px;">
            
            <!-- Header -->
            <tr>
              <td style="padding-bottom:24px;">
                <h2 style="margin:0;font-size:18px;font-weight:600;color:#202124;">
                  New Contact Submission
                </h2>
                <p style="margin:6px 0 0 0;font-size:13px;color:#9aa0a6;">
                  Falcoon website
                </p>
              </td>
            </tr>

            <!-- Divider -->
            <tr>
              <td style="padding-bottom:20px;">
                <div style="height:1px;background:#eaecef;"></div>
              </td>
            </tr>

            <!-- Info Table -->
            <tr>
              <td style="padding-bottom:24px;">
                <table width="100%" cellpadding="0" cellspacing="0">

                  <tr>
                    <td style="padding:8px 0;font-size:13px;color:#9aa0a6;width:120px;">
                      Name
                    </td>
                    <td style="padding:8px 0;font-size:14px;color:#202124;font-weight:500;">
                      ${firstName} ${lastName}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:8px 0;font-size:13px;color:#9aa0a6;">
                      Email
                    </td>
                    <td style="padding:8px 0;font-size:14px;color:#202124;">
                      <a href="mailto:${email}" style="color:#530A4E;text-decoration:none;">
                        ${email}
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:8px 0;font-size:13px;color:#9aa0a6;">
                      Phone
                    </td>
                    <td style="padding:8px 0;font-size:14px;color:#202124;">
                      <a href="tel:${phone}" style="color:#530A4E;text-decoration:none;">
                        ${phone}
                      </a>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>

            <!-- Message Block -->
            <tr>
              <td style="padding-bottom:24px;">
                <p style="margin:0 0 8px 0;font-size:13px;color:#9aa0a6;">
                  Message
                </p>
                <div style="background:#f1f3f4;padding:16px;border-radius:8px;
                            font-size:14px;color:#202124;line-height:1.6;">
                  ${message}
                </div>
              </td>
            </tr>

            <!-- CTA Row -->
            <tr>
              <td style="padding-bottom:24px;">
                <a href="mailto:${email}"
                  style="display:inline-block;padding:10px 16px;background:#530A4E;
                  color:#ffffff;text-decoration:none;border-radius:6px;font-size:13px;">
                  Reply to Customer
                </a>
              </td>
            </tr>

            <!-- Divider -->
            <tr>
              <td style="padding:16px 0;">
                <div style="height:1px;background:#eaecef;"></div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td>
                <p style="margin:0;font-size:12px;color:#9aa0a6;">
                  Sent from Falcoon Contact Form
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
