import React from 'react';
import Card from '../Pages/Card';
import { AppContainer, AppLeft, AppH1, AppText, AppRight,} from '../Pages/AppElements';
function App() {
  return (
    
      <AppContainer>
      
      <AppLeft>
        <AppH1>What's different about Manage?</AppH1>
        <AppText>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</AppText>
      
      </AppLeft>
      <AppRight>
          <Card
          number="01"
          title="Track company-wide progress"
          text="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
          />
          <Card
          number="02"
          title="Advanced built-in reports"
          text="Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
          />
          <Card
          number="03"
          title="Everything you need in one place"
          text="Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
          />
        </AppRight>
      </AppContainer>
    
  );
}

export default App;
