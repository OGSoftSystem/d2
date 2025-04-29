import MaxWidthContainer from "@/components/max-width-container";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const MetaData: Metadata = {
  title: "Terms",
};

const TermsPage = () => {
  return (
    <MaxWidthContainer className="paddingY mx-auto md:max-w-[100ch] text-justify">
      <header className="flex items-center justify-between mb-4 md:mb-10">
        <Link
          href={"/"}
          className="relative w-[100px] h-[100px] md:w-[120px] md:h-[120px] xl:w-[150px] xl:h-[150px] 2xl:w-[180px] 2xl:h-[180px]"
        >
          <Image src={"/img/d2-logo.svg"} fill alt="logo" />
        </Link>

        <Link href={"/"}>
          <ArrowLeft />
        </Link>
      </header>
      <div className="space-y-4 mb-4">
        <h1 className="terms-heading-text">TERMS</h1>
        <p className="p-text">
          These are the Terms of Use for www.d2corpintel.com and its connected
          webpages, microsites and portals (the “Site”). The Site is operated by
          D2 (the “Company”).
        </p>

        <p className="p-text">
          By using the Site, you consent to these Terms of Use and agree to be
          bound by them. YOU AGREE TO READ THESE TERMS AND CONDITIONS OF USE
          CAREFULLY BEFORE USING THIS SITE. If you are not satisfied with the
          Site or do not agree to these Terms of Use, your sole and exclusive
          remedy is to discontinue using the Site.
        </p>

        <p className="p-text">
          If we change these Terms of Use in any way, those changes will be
          posted on this page. By using the Site you agree to be bound by any
          such changes and should therefore periodically visit this page to
          determine the then current Terms of Use to which you are bound.
        </p>
      </div>
      <div className="space-y-4 mb-4">
        <h1 className="terms-heading-text">Access to the Site</h1>
        <p className="p-text">
          It is your responsibility to ensure your computer system meets all the
          necessary technical specifications, including compatibility, to enable
          you to access and use the Site.
        </p>
        <p className="p-text">
          We cannot guarantee the continuous, uninterrupted or error-free
          operability of the Site. There may be times when certain features,
          parts or content of the Site, or the entire Site, become unavailable
          (whether on a scheduled or unscheduled basis) or are modified,
          suspended or withdrawn by us, in our sole discretion, without notice
          to you. You agree that we will not be liable to you or to any third
          party for any unavailability, modification, suspension or withdrawal
          of the Site, or any features, parts or content of the Site.
        </p>
      </div>
      <div className="space-y-4 mb-4">
        <h1 className="terms-heading-text">Copyright</h1>
        <p className="p-text">
          This Site and its content is the copyright of D2 . All rights
          reserved:
        </p>
      </div>
      <div className="space-y-4 mb-4">
        <h2 className="heading-2">What you can do:</h2>
        <p className="p-text">
          You may only use the Site for non-commercial use and only in
          accordance with these Terms of Use. You may retrieve and display
          content from the Site on a computer screen, print and copy individual
          pages and, subject to the next section, store such pages in electronic
          form. Additional terms may also apply to certain features, parts or
          content of the Site and, where they apply, will be displayed before
          you access the relevant features, parts or content.
        </p>
      </div>

      <div className="space-y-4 mb-4">
        <h2 className="heading-2">What you cannot do:</h2>
        <p className="p-text">
          Except to the extent expressly set out in these Terms of Use, you are
          not allowed to:
        </p>
        <ol className="list-disc list-inside">
          <li className="list-item">
            store pages of the Site on a server or other storage device
            connected to a network or create an electronic database by
            systematically downloading and storing all of the pages of the Site;
          </li>

          <li className="list-item">
            remove or change any content of the Site or attempt to circumvent
            security or interfere with the proper working of the Site or the
            servers on which it is hosted; or
          </li>

          <li className="list-item">
            create links to the Site from any other website, without our prior
            written consent.
          </li>
        </ol>
      </div>

      <div className="space-y-4 mb-4">
        <p className="p-text">
          You must only use the Site and information available on the Site for
          lawful purposes (complying with all applicable laws and regulations),
          in a responsible manner, and not in a way that might damage our name
          or reputation or that of any of our or the Companies affiliates.
        </p>

        <p className="p-text">
          All rights granted to you under these Terms of Use will terminate
          immediately in the event that you are in breach of these Terms of Use.
        </p>
      </div>

      <div className="space-y-4 mb-4">
        <h2 className="heading-2">Intellectual property rights</h2>
        <p className="p-text">
          All intellectual property rights in any content of the Site (including
          text, graphics, software, photographs and other images, videos, sound,
          trademarks and logos) are owned by us and/or our suppliers. Except as
          expressly set out here, nothing in these Terms of Use gives you any
          rights in respect of any intellectual property owned by us and/or our
          suppliers and you acknowledge that you do not acquire any ownership
          rights by downloading content from the Site. In the event you print,
          copy or store pages from the Site (only as permitted by these Terms of
          Use), you must ensure that any copyright, trademark or other
          intellectual property right notices contained in the original content
          are reproduced.
        </p>
      </div>

      <div className="space-y-4 mb-4">
        <h2 className="heading-2">Content</h2>
        <p className="p-text">
          We may change the format and content of the Site from time to time.
          You agree that your use of the Site is on an ‘as is’ and ‘as
          available’ basis and at your sole risk.
        </p>

        <p className="p-text">
          Whilst we try to make sure that all information contained on the Site
          is correct, it is not intended to amount to authority or advice on
          which reliance should be placed. You should check with us or the
          relevant information source before acting on any such information.
        </p>

        <p className="p-text">
          We make or give no representation or warranty as to the accuracy,
          completeness, currency, correctness, reliability, integrity, quality,
          fitness for purpose or originality of any content of the Site and, to
          the fullest extent permitted by law, all implied warranties,
          conditions or other terms of any kind are hereby excluded and we
          accept no liability for any loss or damage of any kind incurred as a
          result of you or anyone else using the Site or relying on any of its
          content.
        </p>

        <p className="p-text">
          We cannot and do not guarantee that any content of the Site will be
          free from viruses and/or other code that may have contaminating or
          destructive elements. It is your responsibility to implement
          appropriate IT security safeguards (including anti-virus and other
          security checks) to satisfy your particular requirements as to the
          safety and reliability of content.
        </p>
      </div>

      <div className="space-y-4 mb-4">
        <h2 className="heading-2">External links</h2>
        <p className="p-text">
          The Site may, from time to time, include links to external sites,
          which may include links to third party offers and promotions. We
          include these to provide you with access to information, products or
          services that you may find useful or interesting. We are not
          responsible for the content of these sites or for anything provided by
          them and do not guarantee that they will be continuously available.
          The fact that we include links to such external sites, excluding the
          Company, does not imply any endorsement of, or association with, their
          operators or promoters.
        </p>
      </div>

      <div className="space-y-4 mb-4">
        <h2 className="heading-2">General</h2>
        <p className="p-text">
          You hereby agree to indemnify, defend and hold us and the Company, and
          all our officers, directors, owners, agents, employees, information
          providers and affiliates (collectively, the “Indemnified Parties”)
          harmless from and against any and all liability and costs incurred by
          the Indemnified Parties in connection with any claim arising out of
          your misuse of this Site including, without limitation, legal fees and
          costs. You shall co-operate as fully as reasonably required in the
          defense of any claim. We reserve the right, at our own expense, to
          assume the exclusive defense and control of any matter otherwise
          subject to indemnification by you and you shall not in any event
          settle any matter without our written consent.
        </p>

        <p className="p-text">
          These Terms of Use shall be governed by United States law, and you
          agree that any dispute between you and us regarding them or the Site
          will only be dealt with by the United States courts. Nothing shall
          prevent us from bringing proceedings to protect our intellectual
          property rights before any competent court.
        </p>
      </div>

      <div className="space-y-4 mb-4">
        <p className="heading-2 text-left">
          Cookies and other data retrieval processes
        </p>
        <p className="p-text">
          D2 and the Company do not use any form of Cookies to accumulate or
          retrieve data from visitors to its Site.
        </p>
        <p className="p-text">
          We do, however, collect standard internet log information and details
          of visitor behavior patterns by using standard non-cookie-based data
          retrieval processes. Any information retrieved by this means is held
          in the strictest confidence by us and is not shared with any third
          party outside of D2 or the Company.
        </p>
      </div>

      <div className="space-y-4 mb-4">
        <h2 className="heading-2">Your acceptance of these terms</h2>
        <p className="p-text">
          By using the D2 Site, you consent to the collection and use of your
          information by D2 and the Company as set out in these Terms of Use. If
          we change our cookie policy in any way, these changes will be posted
          on this page.
        </p>
      </div>
    </MaxWidthContainer>
  );
};

export default TermsPage;
