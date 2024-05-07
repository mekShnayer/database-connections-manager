import { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ConnectionsListPage } from './pages/connectionsListPage/ConnectionsListPage';
import { DetailsPage } from './pages/detailsPage/DetailsPage';
import { PageNotFound } from './pages/pageNotFound/PageNotFound';

interface IProps { }

const App: FunctionComponent<IProps> = () => {

  return (
    <div className='page'>
      <Routes>
        <Route path="/" Component={ConnectionsListPage} />
        <Route path={"/connections-details/:id"} Component={DetailsPage} />
        <Route path="*" Component={PageNotFound} />
      </Routes>

    </div>
  );
}

export default App;
