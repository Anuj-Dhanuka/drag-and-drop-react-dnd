import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from 'styled-components';

import Sidebar from './components/SideBar';
import TemplateCanvas from './components/TemplateCanvas';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const SidebarContainer = styled.div`
  width: 250px;
  background: #f0f0f0;
  padding: 20px;
  border-right: 2px solid #ddd;
`;

const TemplateContainer = styled.div`
  width: 1100px;
  background: #fff;
  padding: 20px;
  background-color: #f0f0f0;
`;

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <AppContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <TemplateContainer>
          <TemplateCanvas />
        </TemplateContainer>
      </AppContainer>
    </DndProvider>
  );
}

export default App;
