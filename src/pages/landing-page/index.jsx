import Section1 from "./sections/section1";
import Section2 from "./sections/section2";
import Section3 from "./sections/section3";
import Section4 from "./sections/section4";
import Section5 from "./sections/section5";
import DoughnutChartsGrid from '../section3/section3'
import Table from "../brandPages/social-passport/section2/table";
import Table1 from "../brandPages/analytics-insights/table/table";
import Table2 from "../brandPages/consumer-engagement/table/table";
import ArticleList from '../brandPages/new&updates/cardsSection/section2Cards'
import {DoughnutChartComponent1} from '../../pages/brandPages/consumer-engagement/sectio2/chat'
import SocialFeed from '../brandPages/communityForum/forum'
const LandingPage = () => {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <DoughnutChartsGrid />
      <Table />
      <Table1 />
      <Table2 />
      <ArticleList />
      <DoughnutChartComponent1 />
      <SocialFeed />
    </div>
  );
};

export default LandingPage;
