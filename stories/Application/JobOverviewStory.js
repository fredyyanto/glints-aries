import React from 'react';
import JobOverview from '../../src/Application/JobOverview';
import Icon from '../../src/General/Icon';
import Divider from '../../src/General/Divider';

const JobOverviewStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2.5em' }}>
      <h1>
        JobOverview
      </h1>
      <div>
        <pre>{'import {JobOverview, Icon, Divider} from \'glints-aries\''}</pre>
      </div>

      <JobOverview>
        <JobOverview.Header>
          <img
            height="90"
            width="90"
            alt=""
            src="https://cdn.zeplin.io/5a99106ac26df76756166bac/assets/7798CA38-0D5C-4FDC-ACFC-2EE3781D2062.png" 
          />
        </JobOverview.Header>

        <JobOverview.Body>
          <JobOverview.Label>
            Sangat Spesial
          </JobOverview.Label>

          <JobOverview.Heading>
            Sales & Marketing Supervisor
          </JobOverview.Heading>
          
          <JobOverview.Link>
            <a href="https://facebook.com">
              Berkis Company
            </a>
          </JobOverview.Link>

          <JobOverview.Info>
            <p>
              <span>
                <Icon name="dot" color="#c6c6c6" size="6" />
                <span>HR Recruitment</span>
              </span>
            </p>
            <p>
              <Icon name="dot" color="#c6c6c6" size="6" />
              <span>Jakarta Selatan, Indonesia</span>
            </p>
            <p>
              <Icon name="dot" color="#c6c6c6" size="6" />
              <span>IDR 7,000,000 - IDR 14,000,000</span>
            </p>
            <p>
              <Icon name="dot" color="#c6c6c6" size="6" />
              <span>Magang: 3 bulan</span>
            </p>
          </JobOverview.Info>

          <Divider theme="grey" style={{ margin: 0 }} />
        </JobOverview.Body>
      </JobOverview>

      <br />
      <br />

      <h1>
        Usage
      </h1>

      <pre>{`<JobOverview>
  <JobOverview.Header>
    <img
      height="64"
      width="64"
      alt=""
      src="https://cdn.zeplin.io/5a99106ac26df76756166bac/assets/7798CA38-0D5C-4FDC-ACFC-2EE3781D2062.png" 
    />
  </JobOverview.Header>

  <JobOverview.Body>
    <JobOverview.Label>
      Sangat Spesial
    </JobOverview.Label>

    <JobOverview.Heading>
      Sales & Marketing Supervisor
    </JobOverview.Heading>
    
    <JobOverview.Link>
      <a href="https://facebook.com">
        Berkis Company
      </a>
    </JobOverview.Link>

    <JobOverview.Info>
      <p>
        <Icon name="dot" color="#c6c6c6" size="6" />
        <span>HR Recruitment</span>
      </p>
      <p>
        <Icon name="dot" color="#c6c6c6" size="6" />
        <span>Jakarta Selatan, Indonesia</span>
      </p>
      <p>
        <Icon name="dot" color="#c6c6c6" size="6" />
        <span>IDR 7,000,000 - 14,000,000</span>
      </p>
      <p>
        <Icon name="dot" color="#c6c6c6" size="6" />
        <span>Magang: 3 bulan</span>
      </p>
    </JobOverview.Info>

    <Divider theme="grey" style={{ margin: 0 }} />
  </JobOverview.Body>
</JobOverview>`}
      </pre>
    </div>
  </div>
);

export default JobOverviewStory;
