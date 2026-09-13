import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white text-[#161616] min-h-screen">
      <main>
        <section className="bg-white text-neutral-900">
          <article className="mx-auto max-w-4xl px-8 pt-12 pb-32 md:pt-24 md:pb-48">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors mb-12">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-neutral-900 text-balance first:mt-0">MDFL Inc. Privacy Policy</h1>
            <p className="my-3 text-base leading-relaxed text-neutral-900"><em className="italic text-neutral-500">Last Updated: May 19, 2026</em></p>
            <p className="my-3 text-base leading-relaxed text-neutral-900">This privacy policy ("Policy") describes how MDFL Inc. and its related companies ("MindFlow," "we", "us" or "our") collect, use and share personal information of consumer users of this website, <a className="text-neutral-900 underline decoration-neutral-900/40 underline-offset-4 transition-colors hover:decoration-neutral-900" target="_blank" rel="noreferrer noopener" href="http://www.mindflow-us.com">www.mindflow-us.com</a> (the "Site"), as well as through social media, our marketing activities, and other activities described in this Privacy Policy. This Policy also applies to any of our other websites that post this Policy. This Policy does not apply to websites that post different statements. The information collected by and through MindFlow's proprietary brain-computer interface that allows people to control software and devices using only their brain activity (collectively, our "Technology") is discussed in more detail below in the Section entitled "The MindFlow Technology".</p>
            <p className="my-3 text-base leading-relaxed text-neutral-900">MindFlow may provide additional or supplemental privacy policies to individuals for specific websites, products or services that we offer at the time we collect personal information.</p>
            
            <hr className="my-10 border-t border-neutral-200" />
            
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-neutral-900 text-balance">What We Collect</h2>
            <p className="my-3 text-base leading-relaxed text-neutral-900">We may get information about you in a range of ways.</p>
            
            <h3 className="mt-8 mb-3 text-lg leading-snug tracking-tight text-neutral-900 md:text-xl">Information You Provide Us</h3>
            <ul className="my-4 flex list-disc flex-col gap-2.5 pl-6 text-base leading-relaxed text-neutral-900 marker:text-neutral-400">
              <li><strong className="font-medium text-neutral-900">Contact and demographic information</strong>, including your name, postal address, email address, phone number, fax number, demographic information (such as your gender and occupation), job title and employer as well as other information you directly provide us on our Site.</li>
              <li><strong className="font-medium text-neutral-900">Marketing data</strong>, such as your preferences for receiving our marketing communications and details about your engagement with them.</li>
              <li><strong className="font-medium text-neutral-900">Payment data</strong> needed to complete transactions, such as your payment card information or bank account number. Such information is collected directly by our payment processor, as described below.</li>
            </ul>

            <h3 className="mt-8 mb-3 text-lg leading-snug tracking-tight text-neutral-900 md:text-xl">Information Automatically Collected</h3>
            <p className="my-3 text-base leading-relaxed text-neutral-900">We automatically log information about you and your computer. For example, when visiting our Site, we log your computer operating system type, browser type, browser language, the website you visited before browsing to our Site, pages you viewed, how long you spent on a page, access times and information about your use of and actions on our Site.</p>

            <h3 className="mt-8 mb-3 text-lg leading-snug tracking-tight text-neutral-900 md:text-xl">Cookies</h3>
            <p className="my-3 text-base leading-relaxed text-neutral-900">We may log information using "cookies." Cookies are small data files stored on your hard drive by a website. We may use both session Cookies (which expire once you close your web browser) and persistent Cookies (which stay on your computer until you delete them) to provide you with a more personal and interactive experience on our Site. This type of information is collected to make the Site more useful to you and to tailor the experience with us to meet your special interests and needs.</p>

            <hr className="my-10 border-t border-neutral-200" />
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-neutral-900 text-balance">Use of Personal Information</h2>
            <p className="my-3 text-base leading-relaxed text-neutral-900">We may use your personal information as follows:</p>
            <ul className="my-4 flex list-disc flex-col gap-2.5 pl-6 text-base leading-relaxed text-neutral-900 marker:text-neutral-400">
              <li>To operate, maintain, and improve our sites, products, and services</li>
              <li>To process and deliver contest entries and rewards</li>
              <li>To respond to comments and questions and provide customer service</li>
              <li>To send information including confirmations, invoices, technical notices, updates, security alerts, and support and administrative messages</li>
              <li>To communicate about promotions, upcoming events, and other news about products and services offered by us and our selected partners</li>
              <li>To protect, investigate, and deter against fraudulent, unauthorized, or illegal activity</li>
              <li>To provide and deliver products and services customers request</li>
              <li>To send you email updates and our newsletter if you opt-in to marketing communications</li>
            </ul>

            <hr className="my-10 border-t border-neutral-200" />
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-neutral-900 text-balance">Sharing of Personal Information</h2>
            <p className="my-3 text-base leading-relaxed text-neutral-900">We may share personal information as follows:</p>
            <ul className="my-4 flex list-disc flex-col gap-2.5 pl-6 text-base leading-relaxed text-neutral-900 marker:text-neutral-400">
              <li>We may share personal information <strong className="font-medium text-neutral-900">with your consent</strong>.</li>
              <li>We may share your personal information with <strong className="font-medium text-neutral-900">third parties that provide services on our behalf</strong> or help us operate the Site or our business (such as hosting, information technology, customer support, email delivery, consumer research, marketing, and website analytics).</li>
              <li>We may share information with our <strong className="font-medium text-neutral-900">payment processors</strong>. Any payment information you use to make a purchase on the Site is collected and processed directly by our payment processors and is subject to their privacy policies. For example, we use Stripe as our payment processor. You can review Stripe's privacy policy here: <a className="text-neutral-900 underline decoration-neutral-900/40 underline-offset-4 transition-colors hover:decoration-neutral-900" target="_blank" rel="noreferrer noopener" href="https://stripe.com/privacy">https://stripe.com/privacy</a>.</li>
              <li>We may share personal information in connection with a <strong className="font-medium text-neutral-900">business deal</strong>, including any merger, financing, acquisition, or bankruptcy transaction or proceeding of MindFlow.</li>
              <li>We may share information with our <strong className="font-medium text-neutral-900">professional advisors</strong>, such as lawyers, auditors, bankers and insurers, where necessary in the course of the professional services that they render to us.</li>
              <li>We may share personal information for <strong className="font-medium text-neutral-900">legal, protection, and safety purposes</strong>, including:
                <ul className="my-4 flex list-disc flex-col gap-2.5 pl-6 text-base leading-relaxed text-neutral-900 marker:text-neutral-400">
                  <li>To comply with laws</li>
                  <li>To respond to lawful requests and legal processes</li>
                  <li>To protect the rights and property of MDFL Inc., our agents, customers, and others</li>
                  <li>To protect the safety of our employees and agents, our customers, or any person in an emergency</li>
                </ul>
              </li>
              <li>We may also share <strong className="font-medium text-neutral-900">aggregated and/or anonymized data</strong> with others for their own uses.</li>
            </ul>

            <blockquote className="my-5 border-l-4 border-neutral-200 bg-neutral-50 px-5 py-3 text-base leading-relaxed text-neutral-500">
              <p className="my-0 text-base leading-relaxed text-neutral-900"><strong className="font-medium text-neutral-900">Note:</strong> No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>
            </blockquote>

            <hr className="my-10 border-t border-neutral-200" />
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-neutral-900 text-balance">Information Choices and Changes</h2>
            <p className="my-3 text-base leading-relaxed text-neutral-900">Our marketing emails tell you how to "opt-out." If you opt out, we may still send you non-marketing emails. Non-marketing emails include emails about your accounts and our business dealings with you.</p>
            <p className="my-3 text-base leading-relaxed text-neutral-900">You may send requests about personal information to our Contact Information below. You can request to change contact choices and update your personal information.</p>
            <p className="my-3 text-base leading-relaxed text-neutral-900"><strong className="font-medium text-neutral-900">Do Not Track.</strong> Some Internet browsers may be configured to send "Do Not Track" signals to the online services that you visit. We currently do not respond to "Do Not Track" or similar signals. To find out more about "Do Not Track," please visit <a className="text-neutral-900 underline decoration-neutral-900/40 underline-offset-4 transition-colors hover:decoration-neutral-900" target="_blank" rel="noreferrer noopener" href="http://www.allaboutdnt.com">http://www.allaboutdnt.com</a>.</p>
            <p className="my-3 text-base leading-relaxed text-neutral-900">You can typically remove and reject cookies from our Site with your browser settings. Many browsers are set to accept cookies until you change your settings. If you remove or reject our cookies, it could affect how our Site works for you.</p>

            <hr className="my-10 border-t border-neutral-200" />
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-neutral-900 text-balance">The MindFlow Technology</h2>
            <p className="my-3 text-base leading-relaxed text-neutral-900">MindFlow's proprietary Technology is a brain-computer interface (BCI) system that uses EEG-based wearable hardware to continuously and passively sense neural signals, which are then processed by our software platform to generate real-time cognitive state intelligence — including indicators of focus, fatigue, stress, and engagement.</p>
            <p className="my-3 text-base leading-relaxed text-neutral-900">MindFlow may provide additional or supplemental privacy policies to individuals for specific products or services at the time we collect personal information through the Technology.</p>
            
            <h3 className="mt-8 mb-3 text-lg leading-snug tracking-tight text-neutral-900 md:text-xl">What the Technology Collects</h3>
            <ul className="my-4 flex list-disc flex-col gap-2.5 pl-6 text-base leading-relaxed text-neutral-900 marker:text-neutral-400">
              <li><strong className="font-medium text-neutral-900">Raw EEG signals</strong> captured continuously while you wear a MindFlow Device</li>
              <li><strong className="font-medium text-neutral-900">Ocular motor data</strong> captured via compatible AR/VR or headset sensors</li>
              <li><strong className="font-medium text-neutral-900">Cognitive state outputs</strong> derived from your neural signals, such as attention level, fatigue, stress, and engagement scores</li>
              <li><strong className="font-medium text-neutral-900">Longitudinal cognitive profiles</strong> built over time as the platform personalizes to your patterns</li>
              <li><strong className="font-medium text-neutral-900">Session metadata</strong> such as device type, session timestamps, and wear duration</li>
            </ul>

            <h3 className="mt-8 mb-3 text-lg leading-snug tracking-tight text-neutral-900 md:text-xl">How We Use Neural and Biometric Data</h3>
            <p className="my-3 text-base leading-relaxed text-neutral-900">We use the data collected through the Technology to provide and improve our products and services, to personalize cognitive state inference to individual users, and — using aggregated and de-identified data — for research and development of our platform.</p>
            <p className="my-3 text-base leading-relaxed text-neutral-900">We do not use your neural data to make automated decisions with legal or similarly significant effects without human review. We do not use your neural data to infer protected characteristics for advertising or profiling purposes.</p>

            <h3 className="mt-8 mb-3 text-lg leading-snug tracking-tight text-neutral-900 md:text-xl">Partner Developers</h3>
            <p className="my-3 text-base leading-relaxed text-neutral-900">We make our Technology available to third-party application developers ("Partner Developers") through an API. Partner Developers receive only derived cognitive state outputs — not raw EEG signals — pursuant to written agreements that restrict their use of the data. We require all Partner Developers to maintain a compliant privacy policy and prohibit them from selling or misusing any data received through our platform.</p>

            <h3 className="mt-8 mb-3 text-lg leading-snug tracking-tight text-neutral-900 md:text-xl">Additional Protections for Neural and Biometric Data</h3>
            <p className="my-3 text-base leading-relaxed text-neutral-900">Because EEG and cognitive state data are uniquely sensitive, MindFlow applies the following safeguards:</p>
            <ul className="my-4 flex list-disc flex-col gap-2.5 pl-6 text-base leading-relaxed text-neutral-900 marker:text-neutral-400">
              <li>We collect neural data only with your explicit, written consent prior to first Device use</li>
              <li>You may withdraw consent at any time; we will delete your historical neural data within 30 days of a verified request, subject to legal retention requirements</li>
              <li>Raw EEG data is encrypted at rest and in transit</li>
              <li>Access to raw EEG data is restricted to authorized personnel on a need-to-know basis</li>
            </ul>
            <p className="my-3 text-base leading-relaxed text-neutral-900">MindFlow complies with applicable biometric privacy laws including the Illinois Biometric Information Privacy Act (BIPA), the Texas Capture or Use of Biometric Identifier Act (CUBI), and equivalent state and international laws.</p>

            <h3 className="mt-8 mb-3 text-lg leading-snug tracking-tight text-neutral-900 md:text-xl">Future Capabilities</h3>
            <p className="my-3 text-base leading-relaxed text-neutral-900">MindFlow is developing additional capabilities that may, in the future, use real-time cognitive state data to suggest non-invasive interventions to support focus or reduce fatigue. Any such capability will be opt-in only and subject to a separate consent process before activation.</p>

            <hr className="my-10 border-t border-neutral-200" />
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-neutral-900 text-balance">Other Sites and Services</h2>
            <p className="my-3 text-base leading-relaxed text-neutral-900">The Site may contain links to websites, mobile applications, and other online services operated by third parties. In addition, our content may be integrated into web pages or other online services that are not associated with us. These links and integrations are not an endorsement of, or representation that we are affiliated with, any third party. We do not control websites, mobile applications or online services operated by third parties, and we are not responsible for their actions. We encourage you to read the privacy policies of the other websites, mobile applications and online services you use.</p>

            <hr className="my-10 border-t border-neutral-200" />
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-neutral-900 text-balance">Security</h2>
            <p className="my-3 text-base leading-relaxed text-neutral-900">We employ technical, organizational and physical safeguards designed to protect the personal information we collect. However, security risk is inherent in all internet and information technologies, and we cannot guarantee the security of your personal information.</p>
            <p className="my-3 text-base leading-relaxed text-neutral-900">For neural and biometric data specifically, these safeguards include encryption at rest and in transit, role-based access controls, and regular security reviews. In the event of a confirmed data breach affecting your personal information, we will notify you within 72 hours of discovery.</p>

            <hr className="my-10 border-t border-neutral-200" />
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-neutral-900 text-balance">International Data Transfer</h2>
            <p className="my-3 text-base leading-relaxed text-neutral-900">We are headquartered in the United States and may use service providers that operate in other countries. Your personal information may be transferred to the United States or other locations where privacy laws may not be as protective as those in your state, province, or country.</p>
            <p className="my-3 text-base leading-relaxed text-neutral-900">For transfers of personal data from the European Economic Area (EEA) or United Kingdom, we rely on Standard Contractual Clauses (SCCs) approved by the European Commission, or other lawful transfer mechanisms. For users in other jurisdictions, we implement appropriate safeguards as required by applicable law.</p>

            <hr className="my-10 border-t border-neutral-200" />
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-neutral-900 text-balance">Children</h2>
            <p className="my-3 text-base leading-relaxed text-neutral-900">The Site is not intended for use by anyone under 18 years of age. If you are a parent or guardian of a child from whom you believe we have collected personal information in a manner prohibited by law, please contact us. If we learn that we have collected personal information through the Site from a child without the consent of the child's parent or guardian as required by law, we will comply with applicable legal requirements to delete the information.</p>

            <hr className="my-10 border-t border-neutral-200" />
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-neutral-900 text-balance">Your Rights</h2>
            <p className="my-3 text-base leading-relaxed text-neutral-900">Depending on your location, you may have the following rights regarding your personal information. To exercise any of these rights, please contact us at <a className="text-neutral-900 underline decoration-neutral-900/40 underline-offset-4 transition-colors hover:decoration-neutral-900" href="mailto:hello@mindflow-us.com">hello@mindflow-us.com</a>. We will respond within 30 days and may need to verify your identity before processing your request.</p>
            <ul className="my-4 flex list-disc flex-col gap-2.5 pl-6 text-base leading-relaxed text-neutral-900 marker:text-neutral-400">
              <li><strong className="font-medium text-neutral-900">Access:</strong> Receive a copy of the personal information we hold about you, including your cognitive profile data.</li>
              <li><strong className="font-medium text-neutral-900">Correction:</strong> Request correction of inaccurate or incomplete information.</li>
              <li><strong className="font-medium text-neutral-900">Deletion:</strong> Request deletion of your personal information, subject to legal retention requirements. Neural data is deleted within 90 days of account closure.</li>
              <li><strong className="font-medium text-neutral-900">Portability:</strong> Receive your data in a portable, machine-readable format.</li>
              <li><strong className="font-medium text-neutral-900">Restriction:</strong> Opt out of use of your neural data for platform improvement beyond your own personalization.</li>
              <li><strong className="font-medium text-neutral-900">Non-Discrimination:</strong> Not be discriminated against for exercising your privacy rights.</li>
            </ul>
            <p className="my-3 text-base leading-relaxed text-neutral-900">Residents of California, Virginia, Colorado, Connecticut, Texas, and other states with comprehensive privacy laws have additional rights under applicable state law. EU/EEA and UK residents have rights under the GDPR and UK GDPR; MindFlow relies on your explicit consent as the lawful basis for processing neural and biometric data.</p>

            <hr className="my-10 border-t border-neutral-200" />
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-neutral-900 text-balance">Contact Information</h2>
            <p className="my-3 text-base leading-relaxed text-neutral-900">We welcome your comments or questions about this privacy policy.</p>
            <p className="my-3 text-base leading-relaxed text-neutral-900"><strong className="font-medium text-neutral-900">MDFL Inc.</strong><br/><a className="text-neutral-900 underline decoration-neutral-900/40 underline-offset-4 transition-colors hover:decoration-neutral-900" href="mailto:hello@mindflow-us.com">hello@mindflow-us.com</a></p>

            <hr className="my-10 border-t border-neutral-200" />
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-neutral-900 text-balance">Changes to This Privacy Policy</h2>
            <p className="my-3 text-base leading-relaxed text-neutral-900">We reserve the right to modify this Privacy Policy at any time. If we make material changes to this Privacy Policy, we will notify you by updating the date of this Privacy Policy and posting it on the Site or other appropriate means. Any modifications to this Privacy Policy will be effective upon our posting the modified version (or as otherwise indicated at the time of posting). In all cases, your use of the Site after the effective date of any modified Privacy Policy indicates your acknowledging that the modified Privacy Policy applies to your use of and interactions with the Site and our business.</p>
            <p className="my-3 text-base leading-relaxed text-neutral-900">For changes that materially affect how we collect or use your neural or biometric data, we will provide at least 30 days' advance notice and will seek your renewed consent before those changes apply to your data.</p>
          </article>
        </section>
      </main>
    </div>
  );
}
