import { Routes, Route } from "react-router-dom";

import { JobsPage, LoginPage, PostJobPage, ResetPasswordPage } from "../pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<JobsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/post-a-job" element={<PostJobPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
    </Routes>
  );
};
