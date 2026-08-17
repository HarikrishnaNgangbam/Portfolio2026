import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { HomePage } from '@/pages/home';
import { WorkPage } from '@/pages/work';
import { AboutPage } from '@/pages/about';
import { ResumePage } from '@/pages/resume';
import { ContactPage } from '@/pages/contact';
import { PhoneToPcResumePage } from '@/pages/case-studies/phone-to-pc-resume';
import { PcToPhoneResumePage } from '@/pages/case-studies/pc-to-phone-resume';
import { FamilySafetyPage } from '@/pages/case-studies/family-safety';
import { KopdarInitiativePage } from '@/pages/case-studies/kopdar-initiative';
import { NotFoundPage } from '@/pages/not-found';
import { DesignSystemPage } from '@/pages/design-system';
import { CaseStudyGate } from '@/components/casestudy/case-study-gate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/work/phone-to-pc-resume"
            element={
              <CaseStudyGate slug="phone-to-pc-resume">
                <PhoneToPcResumePage />
              </CaseStudyGate>
            }
          />
          <Route
            path="/work/pc-to-phone-resume"
            element={
              <CaseStudyGate slug="pc-to-phone-resume">
                <PcToPhoneResumePage />
              </CaseStudyGate>
            }
          />
          <Route
            path="/work/family-safety"
            element={
              <CaseStudyGate slug="family-safety">
                <FamilySafetyPage />
              </CaseStudyGate>
            }
          />
          <Route
            path="/work/kopdar-initiative"
            element={
              <CaseStudyGate slug="kopdar-initiative">
                <KopdarInitiativePage />
              </CaseStudyGate>
            }
          />
          <Route path="/design-system" element={<DesignSystemPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
