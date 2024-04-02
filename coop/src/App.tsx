import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import Login from "./pages/Login";
import Post from "./pages/Post";
import Training from "./pages/Training";
import CreatJobOrPost from "./pages/CreatJobOrPost";
import SharedAJob from "./pages/SharedAJob";
import AddAJob from "./pages/AddAJob";
import EditAddAJob from "./pages/EditAddAJob";
import TypeOfWorkplace from "./pages/TypeOfWorkplace";
import ChooseJobType from "./pages/ChooseJobType";
import Location1 from "./pages/Location1";
import Company2 from "./pages/Company2";
import NoMessage from "./pages/NoMessage";
import Message from "./pages/Message";
import Chat from "./pages/Chat";
import Options from "./pages/Options";
import SaveJob from "./pages/SaveJob";
import NoSavings from "./pages/NoSavings";
import Notifications from "./pages/Notifications";
import Notifications1 from "./pages/Notifications1";
import YourApplication from "./pages/YourApplication";
import Notifications2 from "./pages/Notifications2";
import NoNotifications from "./pages/NoNotifications";
import AboutMe from "./pages/AboutMe";
import UndoChanges1 from "./pages/UndoChanges1";
import Profile from "./pages/Profile";
import AddWorkExperience from "./pages/AddWorkExperience";
import ChangeWorkExperience from "./pages/ChangeWorkExperience";
import UndoChanges2 from "./pages/UndoChanges2";
import RemoveWorkExperience from "./pages/RemoveWorkExperience";
import TrainingRequest from "./pages/TrainingRequest";
import TrainingRequest1 from "./pages/TrainingRequest1";
import StartDate from "./pages/StartDate";
import UndoChanges3 from "./pages/UndoChanges3";
import T from "./pages/T";
import RemoveEducation from "./pages/RemoveEducation";
import FieldOfStudy from "./pages/FieldOfStudy";
import AddResume from "./pages/AddResume";
import UploadResume from "./pages/UploadResume";
import MyProfileV from "./pages/MyProfileV";
import Settings from "./pages/Settings";
import SplashScreen from "./pages/SplashScreen";
import SignUp from "./pages/SignUp";
import CText from "./pages/CText";
import ForgotPassword from "./pages/ForgotPassword";
import Successfully from "./pages/Successfully";
import CheckYourEmail from "./pages/CheckYourEmail";
import Imege from "./pages/Imege";
import AddSkill from "./pages/AddSkill";
import Skill from "./pages/Skill";
import AddSkill1 from "./pages/AddSkill1";
import SearchLanguage from "./pages/SearchLanguage";
import Language from "./pages/Language";
import RemoveLanguage from "./pages/RemoveLanguage";
import AddLanguage from "./pages/AddLanguage";
import Oral from "./pages/Oral";
import Description from "./pages/Description";
import AddAppreciation from "./pages/AddAppreciation";
import EditAppreciation from "./pages/EditAppreciation";
import UndoChanges from "./pages/UndoChanges";
import RemoveAppreciation from "./pages/RemoveAppreciation";
import Company from "./pages/Company";
import Company1 from "./pages/Company1";
import Text1 from "./pages/Text1";
import Successful from "./pages/Successful";
import Search from "./pages/Search";
import NoResultsFound from "./pages/NoResultsFound";
import Filter from "./pages/Filter";
import Specialization from "./pages/Specialization";
import MyConnection from "./pages/MyConnection";
import Posting from "./pages/Posting";
import LogOut from "./pages/LogOut";
import UpdatePassword from "./pages/UpdatePassword";
import CVGBT from "./pages/CVGBT";
import Description1 from "./pages/Description1";
import Text2 from "./pages/Text2";
import AboutUs from "./pages/AboutUs";
import Filter1 from "./pages/Filter1";
import AddResumeV from "./pages/AddResumeV";
import UploadCV1 from "./pages/UploadCV1";
import EditProfile from "./pages/EditProfile";
import Image1 from "./pages/Image1";
import Text3 from "./pages/Text3";
import Rectangle from "./pages/Rectangle";
import Text4 from "./pages/Text4";
import Text5 from "./pages/Text5";
import Salary from "./pages/Salary";
import Options1 from "./pages/Options1";
import Text6 from "./pages/Text6";
import Text7 from "./pages/Text7";
import Text8 from "./pages/Text8";
import Text9 from "./pages/Text9";
import Text10 from "./pages/Text10";
import Text11 from "./pages/Text11";
import Logo from "./pages/Logo";
import UploadCV from "./pages/UploadCV";
import AddPost from "./pages/AddPost";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/post":
        title = "";
        metaDescription = "";
        break;
      case "/training":
        title = "";
        metaDescription = "";
        break;
      case "/creat-job-or-post":
        title = "";
        metaDescription = "";
        break;
      case "/shared-a-job":
        title = "";
        metaDescription = "";
        break;
      case "/add-a-job":
        title = "";
        metaDescription = "";
        break;
      case "/edit-add-a-job":
        title = "";
        metaDescription = "";
        break;
      case "/type-of-workplace":
        title = "";
        metaDescription = "";
        break;
      case "/choose-job-type":
        title = "";
        metaDescription = "";
        break;
      case "/location":
        title = "";
        metaDescription = "";
        break;
      case "/company":
        title = "";
        metaDescription = "";
        break;
      case "/no-message":
        title = "";
        metaDescription = "";
        break;
      case "/message":
        title = "";
        metaDescription = "";
        break;
      case "/chat":
        title = "";
        metaDescription = "";
        break;
      case "/options":
        title = "";
        metaDescription = "";
        break;
      case "/save-job":
        title = "";
        metaDescription = "";
        break;
      case "/no-savings":
        title = "";
        metaDescription = "";
        break;
      case "/notifications":
        title = "";
        metaDescription = "";
        break;
      case "/notifications1":
        title = "";
        metaDescription = "";
        break;
      case "/your-application":
        title = "";
        metaDescription = "";
        break;
      case "/notifications2":
        title = "";
        metaDescription = "";
        break;
      case "/no-notifications":
        title = "";
        metaDescription = "";
        break;
      case "/about-me":
        title = "";
        metaDescription = "";
        break;
      case "/undo-changes":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/add-work-experience":
        title = "";
        metaDescription = "";
        break;
      case "/change-work-experience":
        title = "";
        metaDescription = "";
        break;
      case "/undo-changes1":
        title = "";
        metaDescription = "";
        break;
      case "/remove-work-experience":
        title = "";
        metaDescription = "";
        break;
      case "/training-request":
        title = "";
        metaDescription = "";
        break;
      case "/training-request1":
        title = "";
        metaDescription = "";
        break;
      case "/start-date":
        title = "";
        metaDescription = "";
        break;
      case "/undo-changes2":
        title = "";
        metaDescription = "";
        break;
      case "/t":
        title = "";
        metaDescription = "";
        break;
      case "/remove-education":
        title = "";
        metaDescription = "";
        break;
      case "/field-of-study":
        title = "";
        metaDescription = "";
        break;
      case "/add-resume":
        title = "";
        metaDescription = "";
        break;
      case "/upload-resume":
        title = "";
        metaDescription = "";
        break;
      case "/my-profile-v1":
        title = "";
        metaDescription = "";
        break;
      case "/settings":
        title = "";
        metaDescription = "";
        break;
      case "/splash-screen":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/02447c":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password":
        title = "";
        metaDescription = "";
        break;
      case "/successfully":
        title = "";
        metaDescription = "";
        break;
      case "/check-your-email":
        title = "";
        metaDescription = "";
        break;
      case "/imege":
        title = "";
        metaDescription = "";
        break;
      case "/add-skill":
        title = "";
        metaDescription = "";
        break;
      case "/skill-8":
        title = "";
        metaDescription = "";
        break;
      case "/add-skill1":
        title = "";
        metaDescription = "";
        break;
      case "/search-language":
        title = "";
        metaDescription = "";
        break;
      case "/language":
        title = "";
        metaDescription = "";
        break;
      case "/remove-language":
        title = "";
        metaDescription = "";
        break;
      case "/add-language":
        title = "";
        metaDescription = "";
        break;
      case "/oral":
        title = "";
        metaDescription = "";
        break;
      case "/description":
        title = "";
        metaDescription = "";
        break;
      case "/add-appreciation":
        title = "";
        metaDescription = "";
        break;
      case "/edit-appreciation":
        title = "";
        metaDescription = "";
        break;
      case "/undo-changes3":
        title = "";
        metaDescription = "";
        break;
      case "/remove-appreciation":
        title = "";
        metaDescription = "";
        break;
      case "/company1":
        title = "";
        metaDescription = "";
        break;
      case "/company2":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/successful":
        title = "";
        metaDescription = "";
        break;
      case "/search":
        title = "";
        metaDescription = "";
        break;
      case "/no-results-found":
        title = "";
        metaDescription = "";
        break;
      case "/filter":
        title = "";
        metaDescription = "";
        break;
      case "/specialization":
        title = "";
        metaDescription = "";
        break;
      case "/my-connection":
        title = "";
        metaDescription = "";
        break;
      case "/posting":
        title = "";
        metaDescription = "";
        break;
      case "/log-out":
        title = "";
        metaDescription = "";
        break;
      case "/update-password":
        title = "";
        metaDescription = "";
        break;
      case "/cv-gbt":
        title = "";
        metaDescription = "";
        break;
      case "/description1":
        title = "";
        metaDescription = "";
        break;
      case "/1":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/filter1":
        title = "";
        metaDescription = "";
        break;
      case "/add-resume-v2":
        title = "";
        metaDescription = "";
        break;
      case "/upload-cv":
        title = "";
        metaDescription = "";
        break;
      case "/edit-profile":
        title = "";
        metaDescription = "";
        break;
      case "/image":
        title = "";
        metaDescription = "";
        break;
      case "/text":
        title = "";
        metaDescription = "";
        break;
      case "/rectangle":
        title = "";
        metaDescription = "";
        break;
      case "/text1":
        title = "";
        metaDescription = "";
        break;
      case "/text2":
        title = "";
        metaDescription = "";
        break;
      case "/salary":
        title = "";
        metaDescription = "";
        break;
      case "/options1":
        title = "";
        metaDescription = "";
        break;
      case "/2":
        title = "";
        metaDescription = "";
        break;
      case "/3":
        title = "";
        metaDescription = "";
        break;
      case "/4":
        title = "";
        metaDescription = "";
        break;
      case "/5":
        title = "";
        metaDescription = "";
        break;
      case "/6":
        title = "";
        metaDescription = "";
        break;
      case "/7":
        title = "";
        metaDescription = "";
        break;
      case "/logo":
        title = "";
        metaDescription = "";
        break;
      case "/upload-cv1":
        title = "";
        metaDescription = "";
        break;
      case "/add-post":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/login" element={<Login />} />
      <Route path="/post" element={<Post />} />
      <Route path="/training" element={<Training />} />
      <Route path="/creat-job-or-post" element={<CreatJobOrPost />} />
      <Route path="/shared-a-job" element={<SharedAJob />} />
      <Route path="/add-a-job" element={<AddAJob />} />
      <Route path="/edit-add-a-job" element={<EditAddAJob />} />
      <Route path="/type-of-workplace" element={<TypeOfWorkplace />} />
      <Route path="/choose-job-type" element={<ChooseJobType />} />
      <Route path="/location" element={<Location1 />} />
      <Route path="/company" element={<Company2 />} />
      <Route path="/no-message" element={<NoMessage />} />
      <Route path="/message" element={<Message />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/options" element={<Options />} />
      <Route path="/save-job" element={<SaveJob />} />
      <Route path="/no-savings" element={<NoSavings />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/notifications1" element={<Notifications1 />} />
      <Route path="/your-application" element={<YourApplication />} />
      <Route path="/notifications2" element={<Notifications2 />} />
      <Route path="/no-notifications" element={<NoNotifications />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/undo-changes" element={<UndoChanges1 />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/add-work-experience" element={<AddWorkExperience />} />
      <Route
        path="/change-work-experience"
        element={<ChangeWorkExperience />}
      />
      <Route path="/undo-changes1" element={<UndoChanges2 />} />
      <Route
        path="/remove-work-experience"
        element={<RemoveWorkExperience />}
      />
      <Route path="/training-request" element={<TrainingRequest />} />
      <Route path="/training-request1" element={<TrainingRequest1 />} />
      <Route path="/start-date" element={<StartDate />} />
      <Route path="/undo-changes2" element={<UndoChanges3 />} />
      <Route path="/t" element={<T />} />
      <Route path="/remove-education" element={<RemoveEducation />} />
      <Route path="/field-of-study" element={<FieldOfStudy />} />
      <Route path="/add-resume" element={<AddResume />} />
      <Route path="/upload-resume" element={<UploadResume />} />
      <Route path="/my-profile-v1" element={<MyProfileV />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/splash-screen" element={<SplashScreen />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/02447c" element={<CText />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/successfully" element={<Successfully />} />
      <Route path="/check-your-email" element={<CheckYourEmail />} />
      <Route path="/imege" element={<Imege />} />
      <Route path="/add-skill" element={<AddSkill />} />
      <Route path="/skill-8" element={<Skill />} />
      <Route path="/add-skill1" element={<AddSkill1 />} />
      <Route path="/search-language" element={<SearchLanguage />} />
      <Route path="/language" element={<Language />} />
      <Route path="/remove-language" element={<RemoveLanguage />} />
      <Route path="/add-language" element={<AddLanguage />} />
      <Route path="/oral" element={<Oral />} />
      <Route path="/description" element={<Description />} />
      <Route path="/add-appreciation" element={<AddAppreciation />} />
      <Route path="/edit-appreciation" element={<EditAppreciation />} />
      <Route path="/undo-changes3" element={<UndoChanges />} />
      <Route path="/remove-appreciation" element={<RemoveAppreciation />} />
      <Route path="/company1" element={<Company />} />
      <Route path="/company2" element={<Company1 />} />
      <Route path="/" element={<Text1 />} />
      <Route path="/successful" element={<Successful />} />
      <Route path="/search" element={<Search />} />
      <Route path="/no-results-found" element={<NoResultsFound />} />
      <Route path="/filter" element={<Filter />} />
      <Route path="/specialization" element={<Specialization />} />
      <Route path="/my-connection" element={<MyConnection />} />
      <Route path="/posting" element={<Posting />} />
      <Route path="/log-out" element={<LogOut />} />
      <Route path="/update-password" element={<UpdatePassword />} />
      <Route path="/cv-gbt" element={<CVGBT />} />
      <Route path="/description1" element={<Description1 />} />
      <Route path="/1" element={<Text2 />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/filter1" element={<Filter1 />} />
      <Route path="/add-resume-v2" element={<AddResumeV />} />
      <Route path="/upload-cv" element={<UploadCV1 />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/image" element={<Image1 />} />
      <Route path="/text" element={<Text3 />} />
      <Route path="/rectangle" element={<Rectangle />} />
      <Route path="/text1" element={<Text4 />} />
      <Route path="/text2" element={<Text5 />} />
      <Route path="/salary" element={<Salary />} />
      <Route path="/options1" element={<Options1 />} />
      <Route path="/2" element={<Text6 />} />
      <Route path="/3" element={<Text7 />} />
      <Route path="/4" element={<Text8 />} />
      <Route path="/5" element={<Text9 />} />
      <Route path="/6" element={<Text10 />} />
      <Route path="/7" element={<Text11 />} />
      <Route path="/logo" element={<Logo />} />
      <Route path="/upload-cv1" element={<UploadCV />} />
      <Route path="/add-post" element={<AddPost />} />
    </Routes>
  );
}
export default App;
