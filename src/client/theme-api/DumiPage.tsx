import { useRouteMeta, useSiteData } from 'dumi';
import ContentTabs from 'dumi/theme/slots/ContentTabs';
import nprogress from 'nprogress';
import React, { useEffect, useState, type FC, type ReactNode } from 'react';
import { useTabQueryState } from './useTabMeta';

export const DumiPage: FC<{ children: ReactNode }> = (props) => {
  const { tabs } = useRouteMeta();
  const [tabKey, setTabKey] = useTabQueryState();
  const [tab, setTab] = useState<NonNullable<typeof tabs>[0] | undefined>(() =>
    tabs?.find(({ key }) => key === tabKey),
  );
  const { setLoading } = useSiteData();

  // update loading status when page loaded
  useEffect(() => {
    setLoading(false);
    nprogress.done();
  }, []);

  return (
    <>
      <ContentTabs
        tabs={tabs}
        tabKey={tabKey}
        onChange={(val) => {
          setTab(val);
          setTabKey(val?.key);
        }}
      />
      {tab ? React.createElement(tab.components.default) : props.children}
    </>
  );
};
