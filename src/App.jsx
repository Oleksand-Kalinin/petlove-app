import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={"<NewsPage />"} />
        <Route path="/notices" element={"<NoticesPage />"} />
        <Route path="/friends" element={"<FriendsPage />"} />
        <Route path="/register" element={"<RegisterPage />"} />
        <Route path="/login" element={"<LoginPage />"} />
        <Route path="/profile" element={"<ProfilePage />"} />
        <Route path="/add-pet" element={"<AddPetPage />"} />

        <Route path="*" element={"<NotFoundPage />"} />
      </Routes>
    </Layout>
  );
};

export default App;
