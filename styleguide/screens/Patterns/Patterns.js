import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Accessibility from './Accessibility/Accessibility';
import Badge from './Badge/Badge';
import Buttons from './Buttons/Buttons';
import Cards from './Cards/Cards';
import InputField from './InputField/InputField';
import Inputs from './Inputs/Inputs';
import LeftRight from './LeftRight/LeftRight';
import Loader from './Loader/Loader';
import Markdown from './Markdown/Markdown';
import Medallion from './Medallion/Medallion';
import Modals from './Modals/Modals';
import Pagination from './Pagination/Pagination';
import Panels from './Panels/Panels';
import SocialLinks from './SocialLinks/SocialLinks';
import Tabs from './Tabs/Tabs';
import TabBar from './TabBar/TabBar';

const Patterns = () => (
  <Switch>
    <Route path="/patterns/accessibility" component={ Accessibility } />
    <Route path="/patterns/badge" component={ Badge } />
    <Route path="/patterns/buttons" component={ Buttons } />
    <Route path="/patterns/cards" component={ Cards } />
    <Route path="/patterns/input-field" component={ InputField } />
    <Route path="/patterns/inputs" component={ Inputs } />
    <Route path="/patterns/leftright" component={ LeftRight } />
    <Route path="/patterns/loader" component={ Loader } />
    <Route path="/patterns/markdown" component={ Markdown } />
    <Route path="/patterns/medallion" component={ Medallion } />
    <Route path="/patterns/modals" component={ Modals } />
    <Route path="/patterns/pagination" component={ Pagination } />
    <Route path="/patterns/panels" component={ Panels } />
    <Route path="/patterns/social-links" component={ SocialLinks } />
    <Route path="/patterns/tabs" component={ Tabs } />
    <Route path="/patterns/tab-bar" component={ TabBar } />
  </Switch>
);

export default Patterns;
