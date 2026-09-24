const LOGO_URL =
  "https://d3v0px0pttie1i.cloudfront.net/uploads/branding/logo/8969127b-f40f-4ec1-beef-4e20cdc207b4/d189eed8.png";

const currency = (n) =>
  "£" +
  Number(n || 0).toLocaleString("en-GB");

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

/**
 * NOTE: the pricing page posts { selections, oneTimeTotal, monthlyTotal, addonsTotal }
 * to /api/proposal — NOT a single `total`. This template now reads oneTimeTotal /
 * monthlyTotal directly (with a `total` fallback for backward compatibility).
 */
export function getProposalAdminTemplate({
  selections,
  oneTimeTotal,
  monthlyTotal,
  total, // legacy fallback, kept so older callers don't break
}) {
  const {
    contact = {},
    audience,
    core,
    addons = [],
    support,
  } = selections || {};

  const resolvedOneTime =
    oneTimeTotal ?? total ?? 0;

  const resolvedMonthly =
    monthlyTotal ?? support?.price ?? 0;

  const name = escapeHtml(
    contact?.name || "—"
  );

  const email = escapeHtml(
    contact?.email || "—"
  );

  const country = escapeHtml(
    contact?.country || "United Kingdom"
  );

  const countryCode = escapeHtml(
    contact?.countryCode || "GB"
  );

  const city = escapeHtml(
    contact?.city || "—"
  );

  const phone = escapeHtml(
    contact?.phone || "—"
  );

  const safeAudience =
    escapeHtml(audience?.label || "");

  const coreLabel = escapeHtml(
    core?.label || "Core Plan"
  );

  const coreIncluded = Array.isArray(core?.included)
    ? core.included
    : [];

  return `
  <div style="
    margin:0;
    padding:0;
    background:#f5f5f5;
    font-family:Arial,Helvetica,sans-serif;
  ">

    <table
      width="100%"
      cellpadding="0"
      cellspacing="0"
      style="padding:40px 0;"
    >
      <tr>
        <td align="center">

          <table
            width="560"
            cellpadding="0"
            cellspacing="0"
            style="
              background:#ffffff;
              border-radius:16px;
              padding:32px;
              border:1px solid #e3e3e3;
            "
          >

            <!-- LOGO -->
            <tr>
              <td style="padding-bottom:20px;">
                <img
                  src="${LOGO_URL}"
                  alt="Falcoon"
                  style="height:36px;display:block;"
                />
              </td>
            </tr>

            <!-- HEADER -->
            <tr>
              <td style="padding-bottom:16px;">
                <h2 style="
                  margin:0;
                  font-size:20px;
                  color:#111111;
                  font-family:Georgia,'Times New Roman',serif;
                  font-weight:600;
                ">
                  New quotation request
                </h2>

                <p style="
                  margin:7px 0 0;
                  font-size:12px;
                  color:#96702f;
                  font-weight:700;
                  text-transform:uppercase;
                  letter-spacing:.05em;
                ">
                  UK Fitness Professional
                  ${
                    safeAudience
                      ? " · " + safeAudience
                      : ""
                  }
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:16px 0;">
                <div style="
                  height:1px;
                  background:#e7e7e7;
                "></div>
              </td>
            </tr>

            <!-- CUSTOMER INFO -->
            <tr>
              <td style="padding-bottom:22px;">

                <p style="
                  margin:7px 0;
                  font-size:14px;
                  color:#111111;
                ">
                  <strong>Full name:</strong>
                  ${name}
                </p>

                <p style="
                  margin:7px 0;
                  font-size:14px;
                  color:#111111;
                ">
                  <strong>Email:</strong>
                  <a
                    href="mailto:${email}"
                    style="
                      color:#111111;
                      text-decoration:none;
                    "
                  >
                    ${email}
                  </a>
                </p>

                <p style="
                  margin:7px 0;
                  font-size:14px;
                  color:#111111;
                ">
                  <strong>Country:</strong>
                  🇬🇧 ${country}
                  <span style="
                    color:#999999;
                    font-size:12px;
                  ">
                    (${countryCode})
                  </span>
                </p>

                <p style="
                  margin:7px 0;
                  font-size:14px;
                  color:#111111;
                ">
                  <strong>City:</strong>
                  ${city}
                </p>

                <p style="
                  margin:7px 0;
                  font-size:14px;
                  color:#111111;
                ">
                  <strong>Phone:</strong>
                  <a
                    href="tel:${phone}"
                    style="
                      color:#111111;
                      text-decoration:none;
                    "
                  >
                    ${phone}
                  </a>
                </p>

              </td>
            </tr>

            <!-- LOCATION CARD -->
            <tr>
              <td style="padding-bottom:20px;">

                <table
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                  style="
                    background:#faf8f4;
                    border:1px solid #ece6dc;
                    border-radius:11px;
                  "
                >
                  <tr>
                    <td style="padding:14px 16px;">

                      <p style="
                        margin:0 0 5px;
                        font-size:10px;
                        color:#96702f;
                        font-weight:700;
                        text-transform:uppercase;
                        letter-spacing:.06em;
                      ">
                        UK location
                      </p>

                      <p style="
                        margin:0;
                        color:#241f1c;
                        font-size:14px;
                        font-weight:700;
                      ">
                        🇬🇧 ${city}, United Kingdom
                      </p>

                    </td>
                  </tr>
                </table>

              </td>
            </tr>

            <!-- CONFIGURATION -->
            <tr>
              <td style="padding-bottom:20px;">

                <p style="
                  margin:0 0 10px;
                  font-size:11px;
                  color:#96702f;
                  text-transform:uppercase;
                  letter-spacing:.06em;
                  font-weight:700;
                ">
                  Configuration
                </p>

                <div style="
                  background:#f7f1e4;
                  border-radius:11px;
                  padding:16px;
                ">

                  <p style="
                    margin:0 0 8px;
                    font-size:14px;
                    color:#241f1c;
                  ">
                    <strong>${coreLabel}</strong>
                    — ${currency(core?.price)}
                    <span style="color:#96702f;font-size:11.5px;">
                      (one-time)
                    </span>
                  </p>

                  ${
                    coreIncluded.length
                      ? `
                        <ul style="
                          margin:0 0 10px;
                          padding-left:18px;
                        ">
                          ${coreIncluded
                            .map(
                              (item) => `
                                <li style="
                                  font-size:12px;
                                  color:#5b5148;
                                  margin-bottom:3px;
                                ">
                                  ${escapeHtml(item)}
                                </li>
                              `
                            )
                            .join("")}
                        </ul>
                      `
                      : ""
                  }

                  ${
                    addons.length
                      ? addons
                          .map(
                            (a) => `
                              <p style="
                                margin:0 0 6px;
                                font-size:13.5px;
                                color:#5b5148;
                              ">
                                + ${escapeHtml(
                                  a.name
                                )}
                                — ${currency(
                                  a.price
                                )}
                              </p>
                            `
                          )
                          .join("")
                      : `
                          <p style="
                            margin:0 0 6px;
                            font-size:13.5px;
                            color:#5b5148;
                          ">
                            No add-ons selected
                          </p>
                        `
                  }

                  ${
                    support
                      ? `
                        <p style="
                          margin:10px 0 0;
                          font-size:13.5px;
                          color:#96702f;
                          font-weight:700;
                        ">
                          Support:
                          ${escapeHtml(
                            support.name
                          )}
                          —
                          ${currency(
                            support.price
                          )}
                          ${escapeHtml(
                            support.period || ""
                          )}
                        </p>
                      `
                      : `
                        <p style="
                          margin:10px 0 0;
                          font-size:13.5px;
                          color:#5b5148;
                        ">
                          No ongoing support plan
                        </p>
                      `
                  }

                </div>
              </td>
            </tr>

            <!-- TOTAL -->
            <tr>
              <td style="padding-bottom:20px;">

                <div style="
                  background:#111111;
                  padding:18px;
                  border-radius:11px;
                  text-align:center;
                ">

                  <p style="
                    margin:0;
                    font-size:11px;
                    color:#c39a56;
                    font-weight:700;
                    text-transform:uppercase;
                    letter-spacing:.05em;
                  ">
                    One-time build value
                  </p>

                  <h2 style="
                    margin:6px 0 0;
                    color:#ffffff;
                    font-family:Georgia,'Times New Roman',serif;
                    font-size:28px;
                  ">
                    ${currency(resolvedOneTime)}
                  </h2>

                  ${
                    resolvedMonthly > 0
                      ? `
                        <p style="
                          margin:6px 0 0;
                          color:#d8d8d8;
                          font-size:11px;
                        ">
                          +
                          ${currency(resolvedMonthly)}
                          ${escapeHtml(
                            support?.period || "/mo"
                          )}
                          ongoing support
                        </p>
                      `
                      : ""
                  }

                </div>
              </td>
            </tr>

            <!-- CTA -->
            <tr>
              <td style="padding-bottom:8px;">

                <a
                  href="mailto:${email}"
                  style="
                    display:inline-block;
                    padding:11px 18px;
                    background:#111111;
                    color:#ffffff;
                    text-decoration:none;
                    border-radius:999px;
                    font-size:13px;
                    font-weight:700;
                    margin-right:8px;
                  "
                >
                  Reply to client
                </a>

                ${
                  contact?.phone
                    ? `
                      <a
                        href="tel:${escapeHtml(
                          contact.phone
                        )}"
                        style="
                          display:inline-block;
                          padding:11px 18px;
                          background:#c39a56;
                          color:#ffffff;
                          text-decoration:none;
                          border-radius:999px;
                          font-size:13px;
                          font-weight:700;
                        "
                      >
                        Call client
                      </a>
                    `
                    : ""
                }

              </td>
            </tr>

            <!-- FOOTER -->
            <tr>
              <td style="padding-top:16px;">
                <div style="
                  height:1px;
                  background:#e7e7e7;
                "></div>
              </td>
            </tr>

            <tr>
              <td style="padding-top:12px;">

                <p style="
                  margin:0;
                  font-size:11px;
                  color:#96702f;
                ">
                  Falcoon · Fitness funnels for UK
                  fitness professionals
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