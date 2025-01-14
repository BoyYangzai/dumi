import { ReactComponent as IconDown } from '@ant-design/icons-svg/inline-svg/outlined/down.svg';
import React, { type FC } from 'react';

const HeaderExtra: FC = () => {
  return (
    <div
      className="dumi-default-lang-select"
      style={{
        borderInlineStart: '1px solid #d0d5d8',
        marginInlineStart: 15,
        paddingInlineStart: 5,
      }}
    >
      <select
        style={{ paddingTop: 1, paddingBottom: 1 }}
        value={process.env.DUMI_VERSION}
        onChange={(e) => {
          if (e.target.value !== process.env.DUMI_VERSION) {
            window.open('https://v1.d.umijs.org/', '_blank');
          }
        }}
      >
        <option value={process.env.DUMI_VERSION}>
          {process.env.DUMI_VERSION}
        </option>
        <option value="1.x">1.x</option>
      </select>
      <IconDown />
    </div>
  );
};

export default HeaderExtra;
