import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function HealthPolicy() {
  return (
    <div className="bg-white text-[#161616] min-h-screen">
      <main>
        <section className="bg-white text-neutral-900">
          <article className="mx-auto max-w-4xl px-8 pt-12 pb-32 md:pt-24 md:pb-48">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors mb-12">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-neutral-900 text-balance first:mt-0">Consumer Health Data Privacy Policy</h1>
            
            <p className="my-3 text-base leading-relaxed text-neutral-900"><em className="italic text-neutral-500">Effective as of May 19, 2026.</em></p>
            
            <p className="my-3 text-base leading-relaxed text-neutral-900">MDFL, Inc. ("MindFlow", "we", "us" or "our") provides a brain-computer interface (BCI) platform — including EEG-based wearable hardware and a cognitive AI software platform — designed to continuously and passively sense neural signals and translate them into real-time cognitive state intelligence. This includes a broad range of cognitive states such as attention, fatigue, stress, overload, engagement, uncertainty, readiness, intent, and flow. Our Technology includes devices with biological sensors that are either created by MindFlow or a third-party partner ("Device"), as well as the software and AI systems that process the data those Devices collect.</p>
            
            <p className="my-3 text-base leading-relaxed text-neutral-900">This Consumer Health Data Privacy Policy ("Consumer Health Data Privacy Policy") applies to the extent US state consumer health data-specific privacy laws to which we are subject (e.g., the Washington My Health My Data Act) ("Consumer Health Data Privacy Laws") apply to our processing of certain health status-related data, such as "consumer health data" as defined by such laws ("Consumer Health Data"). Consumer Health Data does not include "publicly available information" or "deidentified data", as such terms or similar terms are defined by Consumer Health Data Privacy Laws. This Consumer Health Data Privacy Policy describes how MindFlow processes Consumer Health Data that we collect through the Device and corresponding end-user applications from MindFlow (the "Apps") (the Device and the Apps, collectively, the "Services").</p>
            
            <p className="my-3 text-base leading-relaxed text-neutral-900">This Consumer Health Data Privacy Policy supplements our Services Privacy Policy. In the event of a conflict between our Services Privacy Policy and this Consumer Health Data Privacy Policy, this Consumer Health Data Privacy Policy shall control only with respect to Consumer Health Data and to the extent required by applicable Consumer Health Data Privacy Laws.</p>
            
            <hr className="my-10 border-t border-neutral-200" />
            
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-neutral-900 text-balance">Consumer Health Data We Collect</h2>
            
            <p className="my-3 text-base leading-relaxed text-neutral-900">Consumer Health Data you may provide to us through the Services includes the following, to the extent that such data is linked or reasonably linkable to you and identifies your past, present, or future physical or mental health status. We will obtain your consent where required by applicable Consumer Health Data Privacy Laws:</p>
            
            <ul className="my-4 flex list-disc flex-col gap-2.5 pl-6 text-base leading-relaxed text-neutral-900 marker:text-neutral-400">
            <li><strong className="font-medium text-neutral-900">Profile data</strong>, such as whether you are left-handed or right-handed, your health conditions that you may choose to disclose to us (e.g., ADHD), and your preferences and characteristics, which we may generate from the Consumer Health Data we collect.</li>
            <li><strong className="font-medium text-neutral-900">Cognitive state data</strong>, such as your real-time and session-level scores across the full range of cognitive states our platform monitors — including attention, fatigue, stress, overload, engagement, uncertainty, readiness, intent, and flow — as well as generated insights derived from those scores (such as your optimal performance windows, recovery patterns, or cognitive load trends).</li>
            <li><strong className="font-medium text-neutral-900">Session data</strong>, including activity names, session notes you create in the App, and session duration and frequency of use.</li>
            <li><strong className="font-medium text-neutral-900">Responses to surveys and questionnaires</strong>, such as your voluntary responses regarding your work habits, user goals, or cognitive experience.</li>
            <li><strong className="font-medium text-neutral-900">Communications data</strong> based on our exchanges with you, including when you contact us through the App in relation to your use of the Services.</li>
            <li><strong className="font-medium text-neutral-900">Feedback data</strong>, including information you voluntarily share and upload to us when you complete our product feedback form or request support.</li>
            <li><strong className="font-medium text-neutral-900">Brainwave data</strong>, such as raw EEG data and cognitive state outputs derived from raw EEG data across the full range of cognitive states our platform monitors. We will only collect raw EEG data if you opt-in to such collection.</li>
            <li><strong className="font-medium text-neutral-900">Longitudinal cognitive profile data</strong>, comprising cognitive state patterns built over time as our platform personalizes to your individual neural signals across all monitored cognitive dimensions.</li>
            <li><strong className="font-medium text-neutral-900">Device usage data</strong>, such as accelerometer data that measures vibration, calibration data, electrode impedance readings, and data about sensor signal quality.</li>
            </ul>
            
            <hr className="my-10 border-t border-neutral-200" />
            
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-neutral-900 text-balance">Sources of Consumer Health Data</h2>
            
            <p className="my-3 text-base leading-relaxed text-neutral-900">We collect Consumer Health Data directly from you when you use the Services, including when you use a Device that includes MindFlow technology. We may also create, infer, or generate Consumer Health Data from such data — including cognitive state outputs derived by our AI platform from raw EEG signals.</p>
            
            <p className="my-3 text-base leading-relaxed text-neutral-900">Where you use a third-party application that is powered by the MindFlow API ("Partner Developer application"), we may receive Consumer Health Data from that application pursuant to a data processing agreement with the Partner Developer. Partner Developers receive only derived cognitive state outputs — not raw EEG signals — unless you separately and explicitly authorize otherwise.</p>
            
            <hr className="my-10 border-t border-neutral-200" />
            
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-neutral-900 text-balance">How We Use Your Consumer Health Data</h2>
            
            <p className="my-3 text-base leading-relaxed text-neutral-900">We use Consumer Health Data for the purposes below (with each purpose described in more detail in the Services Privacy Policy) or as otherwise disclosed to you. We will obtain your consent where required by applicable Consumer Health Data Privacy Laws.</p>
            
            <div className="my-5 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm leading-relaxed text-neutral-900 md:text-base">
            <thead className="bg-neutral-50 text-neutral-900">
            <tr>
            <th className="border border-neutral-200 px-3 py-2 align-top font-medium">Purpose of Use / How Data Is Used</th>
            <th className="border border-neutral-200 px-3 py-2 align-top font-medium">Applicable Categories of Consumer Health Data</th>
            </tr>
            </thead>
            <tbody>
            <tr><td className="border border-neutral-200 px-3 py-2 align-top">Service delivery and operations</td><td className="border border-neutral-200 px-3 py-2 align-top">Profile data, Cognitive state data, Session data, Responses to surveys and questionnaires, Communications data, Feedback data, Brainwave data, Longitudinal cognitive profile data, Device usage data</td></tr>
            <tr><td className="border border-neutral-200 px-3 py-2 align-top">Service personalization</td><td className="border border-neutral-200 px-3 py-2 align-top">Profile data, Cognitive state data, Session data, Responses to surveys and questionnaires, Communications data, Feedback data, Brainwave data, Longitudinal cognitive profile data, Device usage data</td></tr>
            <tr><td className="border border-neutral-200 px-3 py-2 align-top">Service improvement and analytics</td><td className="border border-neutral-200 px-3 py-2 align-top">Profile data, Cognitive state data, Session data, Responses to surveys and questionnaires, Communications data, Feedback data, Brainwave data, Longitudinal cognitive profile data, Device usage data</td></tr>
            <tr><td className="border border-neutral-200 px-3 py-2 align-top">AI platform improvement (using aggregated and de-identified data only)</td><td className="border border-neutral-200 px-3 py-2 align-top">Brainwave data, Longitudinal cognitive profile data, Cognitive state data, Device usage data</td></tr>
            <tr><td className="border border-neutral-200 px-3 py-2 align-top">Compliance and protection</td><td className="border border-neutral-200 px-3 py-2 align-top">Profile data, Cognitive state data, Session data, Responses to surveys and questionnaires, Communications data, Feedback data, Brainwave data, Longitudinal cognitive profile data, Device usage data</td></tr>
            <tr><td className="border border-neutral-200 px-3 py-2 align-top">To create aggregated, de-identified and/or anonymized data</td><td className="border border-neutral-200 px-3 py-2 align-top">Profile data, Cognitive state data, Session data, Responses to surveys and questionnaires, Communications data, Feedback data, Brainwave data, Longitudinal cognitive profile data, Device usage data</td></tr>
            </tbody>
            </table>
            </div>
            
            <p className="my-3 text-base leading-relaxed text-neutral-900">We do not use your Consumer Health Data to make automated decisions with legal or similarly significant effects without human review. We do not use your Consumer Health Data to infer protected characteristics (such as race, religion, political views, or sexual orientation) for advertising or profiling purposes.</p>
            
            <h3 className="mt-8 mb-3 text-lg leading-snug tracking-tight text-neutral-900 md:text-xl">Future Capabilities</h3>
            
            <p className="my-3 text-base leading-relaxed text-neutral-900">MindFlow is developing additional capabilities that may, in the future, use real-time cognitive state data to suggest non-invasive interventions — such as audio cues, environmental adjustments, pacing recommendations, or neurofeedback signals — to guide users toward desired cognitive states such as focus, reduced stress, or recovery from overload. Any such capability will be opt-in only and subject to a separate consent process before activation.</p>
            
            <hr className="my-10 border-t border-neutral-200" />
            
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-neutral-900 text-balance">How We Share Your Consumer Health Data</h2>
            
            <p className="my-3 text-base leading-relaxed text-neutral-900">We may "share" (as applicable Consumer Health Data Privacy Laws define that term) Consumer Health Data with your consent or as we determine necessary to provide the Services to you, or as otherwise permitted or required by law. We will obtain your consent where required by applicable Consumer Health Data Privacy Laws. For example, we may share your Consumer Health Data with the following categories of third parties:</p>
            
            <ul className="my-4 flex list-disc flex-col gap-2.5 pl-6 text-base leading-relaxed text-neutral-900 marker:text-neutral-400">
            <li><strong className="font-medium text-neutral-900">Third parties designated by you.</strong> We may share your Consumer Health Data with third parties where you have instructed us or provided your consent to do so.</li>
            <li><strong className="font-medium text-neutral-900">Partner Developers.</strong> We may share derived cognitive state outputs — not raw EEG signals — with Partner Developers who access our platform through our API, pursuant to written data processing agreements that restrict their use of the data and prohibit resale or misuse.</li>
            <li><strong className="font-medium text-neutral-900">Authorities and others.</strong> We will access, share, and preserve Consumer Health Data when we believe that doing so is necessary to comply with applicable law or respond to valid legal process, including from law enforcement or other government agencies. We will also share Consumer Health Data if we believe it is necessary to protect our customers and/or the rights or property of ourselves or others.</li>
            <li><strong className="font-medium text-neutral-900">Business transferees.</strong> We may disclose Consumer Health Data to acquirers and/or other relevant participants in corporate events (including negotiations of or due diligence for such events) such as investments in MindFlow, financing of MindFlow, public stock offerings, or the sale, transfer or merger of all or part of our business, assets, or shares. Consumer Health Data transferred in such events will remain subject to this Policy or a successor policy with equivalent protections.</li>
            <li><strong className="font-medium text-neutral-900">Professional advisors.</strong> We may disclose Consumer Health Data to professional advisors, such as lawyers, auditors, bankers, and insurers, where necessary in the course of the professional services that they render to us.</li>
            </ul>
            
            <hr className="my-10 border-t border-neutral-200" />
            
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-neutral-900 text-balance">Your Consumer Health Data Choices</h2>
            
            <p className="my-3 text-base leading-relaxed text-neutral-900">You may have certain rights to your Consumer Health Data under applicable Consumer Health Data Privacy Laws. Any of the rights discussed below may be subject to certain limitations (for example, a monetary charge).</p>
            
            <ul className="my-4 flex list-disc flex-col gap-2.5 pl-6 text-base leading-relaxed text-neutral-900 marker:text-neutral-400">
            <li><strong className="font-medium text-neutral-900">Withdraw consent.</strong> To the extent we rely upon your consent for either our collection or sharing of your Consumer Health Data, you have the right to withdraw such consent from any future collection or sharing. Upon withdrawal, we will stop collecting new Consumer Health Data and will delete your historical brainwave data and longitudinal cognitive profile data within 30 days of a verified request, subject to legal retention requirements.</li>
            <li><strong className="font-medium text-neutral-900">Access and confirm.</strong> You have the right to ask us to confirm whether we have collected, shared or sold your Consumer Health Data. Further, you have the right to access (in other words, request a copy of) the Consumer Health Data that we have collected, shared or sold. You also have a right to access a list of all "third parties" (as applicable law may define that term) and affiliates with whom we have shared or sold your Consumer Health Data and receive certain corresponding information.</li>
            <li><strong className="font-medium text-neutral-900">Deletion.</strong> You have the right to ask us to delete your Consumer Health Data.</li>
            <li><strong className="font-medium text-neutral-900">Restrict AI platform use.</strong> You have the right to opt out of the use of your brainwave data and longitudinal cognitive profile data for AI platform improvement beyond your own personalization, without affecting your ability to use the Services.</li>
            <li><strong className="font-medium text-neutral-900">Appeal.</strong> You have the right to appeal our denying a right you have attempted to exercise. We will provide details on how to appeal our denial in connection with such action.</li>
            </ul>
            
            <p className="my-3 text-base leading-relaxed text-neutral-900">If a Consumer Health Data Privacy Law applies to you and your Consumer Health Data and you wish to exercise your rights above, please email us at <a className="text-neutral-900 underline decoration-neutral-900/40 underline-offset-4 transition-colors hover:decoration-neutral-900" href="mailto:hello@mindflow-us.com">hello@mindflow-us.com</a>. We may need to verify your identity to process your request. To confirm your identity, we may ask you to verify personal information we already have on file for you. If we cannot verify your identity based on the information we have on file, we may request additional information from you (such as government identification), which we will only use to verify your identity, and for security or fraud-prevention purposes.</p>
            
            <p className="my-3 text-base leading-relaxed text-neutral-900"><strong className="font-medium text-neutral-900">Declining to provide information.</strong> We need to collect or process Consumer Health Data to provide certain services, including the Services, to you. If you do not provide the information we identify as required or mandatory, or if you request that any required Consumer Health Data be deleted or withdraw your consent for future collection or sharing of any required Consumer Health Data, we may not be able to provide those services to you.</p>
            
            <hr className="my-10 border-t border-neutral-200" />
            
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-neutral-900 text-balance">Changes to This Consumer Health Data Privacy Policy</h2>
            
            <p className="my-3 text-base leading-relaxed text-neutral-900">We reserve the right to modify this Consumer Health Data Privacy Policy at any time. If we make material changes to this Consumer Health Data Privacy Policy, we will notify you by updating the date of this Consumer Health Data Privacy Policy and posting it on the Services or other appropriate means. Any modifications to this Consumer Health Data Privacy Policy will be effective upon our posting the modified version (or as otherwise indicated at the time of posting). In all cases, your use of the Services after the effective date of any modified Consumer Health Data Privacy Policy indicates your acknowledging that the modified Consumer Health Data Privacy Policy applies to your interactions with the Services and our business.</p>
            
            <p className="my-3 text-base leading-relaxed text-neutral-900">For changes that materially affect how we collect or use your brainwave data or longitudinal cognitive profile data, we will provide at least 30 days' advance notice and will seek your renewed consent before those changes apply to your data.</p>
            
            <hr className="my-10 border-t border-neutral-200" />
            
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-neutral-900 text-balance">How to Contact Us</h2>
            
            <p className="my-3 text-base leading-relaxed text-neutral-900"><strong className="font-medium text-neutral-900">Email:</strong> <a className="text-neutral-900 underline decoration-neutral-900/40 underline-offset-4 transition-colors hover:decoration-neutral-900" href="mailto:hello@mindflow-us.com">hello@mindflow-us.com</a></p>
            
            <hr className="my-10 border-t border-neutral-200" />
            
            <h1 className="text-3xl md:text-4xl font-bold mt-24 mb-6 text-neutral-900 text-balance first:mt-0">Nevada Supplemental Consumer Health Data Privacy Policy</h1>
            
            <p className="my-3 text-base leading-relaxed text-neutral-900">This Supplement applies to our processing of Consumer Health Data about Nevada consumers, for purposes of providing additional disclosures required by Nevada's Consumer Health Data Privacy Law. We collect, use, process, and share Consumer Health Data for the purposes and manners described above in our Consumer Health Data Privacy Policy. In addition:</p>
            
            <p className="my-3 text-base leading-relaxed text-neutral-900"><strong className="font-medium text-neutral-900">Review and Revision of Consumer Health Data.</strong> If you are a Nevada consumer and you would like to review and/or revise your Consumer Health Data, you may submit a request to us via the method listed in the <em className="italic text-neutral-500">Your Consumer Health Data Choices</em> section of our Consumer Health Data Privacy Policy.</p>
            
            <p className="my-3 text-base leading-relaxed text-neutral-900"><strong className="font-medium text-neutral-900">Third Party Collection of Consumer Health Data Across Sites.</strong> We do not allow third parties (i.e., non-service providers) to collect Consumer Health Data over time and across different Internet websites or online services when you use our Services.</p>
          </article>
        </section>
      </main>
    </div>
  );
}
