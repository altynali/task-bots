import React, { useState } from 'react';
import PanelNav from './PanelNav';
import MainPanel from './MainPanel';
import { pagesBuyer, pagesSeller } from './mocks';

const Panel = () => {
  const [activePageUrl, setActivePageUrl] = useState('tasks');
  const [activeRole, setActiveRole] = useState('buyer');
  const [createTaskOpened, setOpenCreateTask] = useState(false);

  let pages = [];
  if (activeRole === 'seller') pages = [...pagesSeller];
  else if (activeRole === 'buyer') pages = [...pagesBuyer];

  const [activePage, setActivePage] = useState(pages[0]);

  const handleActiveUrl = (active) => {
    setActivePageUrl(active);
  };

  const handleActivePage = (active) => {
    setActivePage(active);
  };

  const handleActiveRole = (active) => {
    setActiveRole(active);
  };

  return (
    <div className={'w-full min-h-screen bg-gray-800'}>
      <PanelNav
        handleActiveUrl={handleActiveUrl}
        handleActivePage={handleActivePage}
        activeRole={activeRole}
        handleActiveRole={handleActiveRole}
        createTaskOpened={createTaskOpened}
        setOpenCreateTask={setOpenCreateTask}
      />
      <MainPanel
        handleActiveUrl={handleActiveUrl}
        url={activePageUrl}
        handleActivePage={handleActivePage}
        activePage={activePage}
        activeRole={activeRole}
        handleActiveRole={handleActiveRole}
        setOpenCreateTask={setOpenCreateTask}
      />
    </div>
  );
};

export default Panel;
