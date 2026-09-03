import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { HomePage } from '@/pages/home';
import { WorkPage } from '@/pages/work';
import { AboutPage } from '@/pages/about';
import { ResumePage } from '@/pages/resume';
import { ContactPage } from '@/pages/contact';
import { NotFoundPage } from '@/pages/not-found';
import { CaseStudyGate } from '@/components/casestudy/case-study-gate';

// Case studies and the design-system showcase are the largest page bundles
// and the least likely to be visited on every session — code-split so a
// visit to "/" doesn't ship their JS up front.
const PhoneToPcResumePage = lazy(() =>
  import('@/pages/case-studies/phone-to-pc-resume').then((m) => ({
    default: m.PhoneToPcResumePage,
  })),
);
const PcToPhoneResumePage = lazy(() =>
  import('@/pages/case-studies/pc-to-phone-resume').then((m) => ({
    default: m.PcToPhoneResumePage,
  })),
);
const FamilySafetyPage = lazy(() =>
  import('@/pages/case-studies/family-safety').then((m) => ({
    default: m.FamilySafetyPage,
  })),
);
const KopdarInitiativePage = lazy(() =>
  import('@/pages/case-studies/kopdar-initiative').then((m) => ({
    default: m.KopdarInitiativePage,
  })),
);
const DesignSystemPage = lazy(() =>
  import('@/pages/design-system').then((m) => ({ default: m.DesignSystemPage })),
);

// Family Safety's standalone artifact pages — small, rarely-visited
// documentation pages, so code-split the same way as the case studies.
const IdeationToPrototypeWorkflowPage = lazy(() =>
  import('@/pages/artifacts/ideation-to-prototype-workflow').then((m) => ({
    default: m.IdeationToPrototypeWorkflowPage,
  })),
);
const PmChecklistPage = lazy(() =>
  import('@/pages/artifacts/pm-checklist').then((m) => ({ default: m.PmChecklistPage })),
);
const DesignOfficeHoursPage = lazy(() =>
  import('@/pages/artifacts/design-office-hours').then((m) => ({ default: m.DesignOfficeHoursPage })),
);
const EngineeringReadinessFrameworkPage = lazy(() =>
  import('@/pages/artifacts/engineering-readiness-framework').then((m) => ({
    default: m.EngineeringReadinessFrameworkPage,
  })),
);

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
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
                <Suspense fallback={null}>
                  <PhoneToPcResumePage />
                </Suspense>
              </CaseStudyGate>
            }
          />
          <Route
            path="/work/pc-to-phone-resume"
            element={
              <CaseStudyGate slug="pc-to-phone-resume">
                <Suspense fallback={null}>
                  <PcToPhoneResumePage />
                </Suspense>
              </CaseStudyGate>
            }
          />
          <Route
            path="/work/family-safety"
            element={
              <CaseStudyGate slug="family-safety">
                <Suspense fallback={null}>
                  <FamilySafetyPage />
                </Suspense>
              </CaseStudyGate>
            }
          />
          <Route
            path="/work/family-safety/ideation-to-prototype-workflow"
            element={
              <Suspense fallback={null}>
                <IdeationToPrototypeWorkflowPage />
              </Suspense>
            }
          />
          <Route
            path="/work/family-safety/pm-checklist"
            element={
              <Suspense fallback={null}>
                <PmChecklistPage />
              </Suspense>
            }
          />
          <Route
            path="/work/family-safety/design-office-hours"
            element={
              <Suspense fallback={null}>
                <DesignOfficeHoursPage />
              </Suspense>
            }
          />
          <Route
            path="/work/family-safety/engineering-readiness-framework"
            element={
              <Suspense fallback={null}>
                <EngineeringReadinessFrameworkPage />
              </Suspense>
            }
          />
          <Route
            path="/work/kopdar-initiative"
            element={
              <CaseStudyGate slug="kopdar-initiative">
                <Suspense fallback={null}>
                  <KopdarInitiativePage />
                </Suspense>
              </CaseStudyGate>
            }
          />
          <Route
            path="/design-system"
            element={
              <Suspense fallback={null}>
                <DesignSystemPage />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
