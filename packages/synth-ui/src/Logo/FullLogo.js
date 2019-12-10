import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { unit } from '@beatgig/synth-core'

import { styleProp } from '../utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'svg', import('@beatgig/synth-ui').FullLogoProps>}
 */
const StyledSvg = styled.svg`
  height: ${unit(styleProp('height'))};
  width: ${unit(styleProp('width'))};
`

const FullLogo = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').FullLogoProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  (
    {
      className = '',
      dark = false,
      height = '331px',
      width = 'auto',
      ...props
    },
    ref,
  ) => {
    const fill = dark ? '#1E1C21' : '#FCFDFD'

    return (
      <StyledSvg
        {...props}
        className={className}
        height={height}
        ref={ref}
        viewBox="0 0 1584 331"
        width={width}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1490.73 220.019C1461.71 220.019 1438.21 196.504 1438.21 167.494C1438.21 138.494 1461.71 114.973 1490.73 114.973C1519.71 114.973 1543.25 138.494 1543.25 167.494C1543.25 196.504 1519.71 220.019 1490.73 220.019V220.019ZM1583.48 165.503H1583.44C1582.59 115.009 1541.41 74.3341 1490.73 74.3341C1439.47 74.3341 1397.98 115.866 1397.98 167.099C1397.98 218.324 1439.47 259.856 1490.73 259.856C1510.06 259.856 1528 253.936 1542.85 243.808C1539.84 269.755 1517.96 289.915 1491.27 290.193V330.048C1541.68 329.743 1582.54 289.211 1583.44 238.928H1583.48V165.503"
          fill={fill}
        />
        <path
          d="M1369.15 259.671H1329.44V75.3305H1369.15V259.671"
          fill={fill}
        />
        <path
          d="M1373.43 25.3174C1373.43 38.6475 1362.63 49.4469 1349.3 49.4469C1335.97 49.4469 1325.16 38.6475 1325.16 25.3174C1325.16 12.0004 1335.97 1.19261 1349.3 1.19261C1362.63 1.19261 1373.43 12.0004 1373.43 25.3174Z"
          fill={fill}
        />
        <path
          d="M1210.01 220.021C1181.02 220.021 1157.47 196.507 1157.47 167.494C1157.47 138.495 1181.02 114.972 1210.01 114.972C1239.03 114.972 1262.54 138.495 1262.54 167.494C1262.54 196.507 1239.03 220.021 1210.01 220.021ZM1302.78 165.506H1302.73C1301.87 115.011 1260.68 74.336 1210.01 74.336C1158.77 74.336 1117.23 115.865 1117.23 167.102C1117.23 218.326 1158.77 259.855 1210.01 259.855C1229.33 259.855 1247.31 253.938 1262.15 243.807C1259.13 269.93 1236.96 290.222 1210.01 290.222V330.06C1260.68 330.06 1301.87 289.398 1302.73 238.929H1302.78V165.506"
          fill={fill}
        />
        <path
          d="M1102.76 105.601V71.2839H1047.75V9.76349H1008.02V169.435H1008.11C1009.36 219.583 1050.35 259.855 1100.79 259.855V220.019C1071.8 220.019 1048.25 196.503 1048.25 167.495H1047.75V105.601H1102.76"
          fill={fill}
        />
        <path
          d="M891.679 220.023C862.691 220.023 839.138 196.511 839.138 167.499C839.138 138.499 862.691 114.979 891.679 114.979C920.708 114.979 944.219 138.499 944.219 167.499C944.219 196.511 920.708 220.023 891.679 220.023ZM984.407 165.51C983.543 115.016 942.367 74.3382 891.679 74.3382C840.456 74.3382 798.909 115.868 798.909 167.104C798.909 218.331 840.456 259.861 891.679 259.861C911.443 259.861 929.725 253.672 944.754 243.152V259.729H984.448V165.51H984.407"
          fill={fill}
        />
        <path
          d="M690.839 114.982C711.65 114.982 729.584 127.137 738.092 144.712H643.546C652.054 127.137 669.988 114.982 690.839 114.982V114.982ZM782.55 181.132C783.229 176.563 783.588 171.878 783.588 167.108C783.588 115.873 742.047 74.343 690.839 74.343C639.591 74.343 598.05 115.873 598.05 167.108C598.05 218.332 639.591 259.862 690.839 259.862C731.062 259.862 765.254 234.266 778.116 198.472L733.299 198.328C723.753 211.458 708.294 220.026 690.839 220.026C666.553 220.026 646.182 203.521 640.151 181.132H782.55"
          fill={fill}
        />
        <path
          d="M489.891 219.224C460.896 219.224 437.36 195.703 437.36 166.697C437.36 137.694 460.896 114.178 489.891 114.178C518.885 114.178 542.421 137.694 542.421 166.697C542.421 195.703 518.885 219.224 489.891 219.224ZM489.891 74.3363C470.148 74.3363 451.838 80.5222 436.818 91.0477V-7.04291e-05H397.139V168.698H397.178C398.03 219.189 439.179 259.855 489.891 259.855C541.105 259.855 582.642 218.329 582.642 167.095C582.642 115.865 541.105 74.3363 489.891 74.3363"
          fill={fill}
        />
        <path
          d="M313.413 190.35L313.451 189.049H263.012C254.821 202.583 239.96 211.623 222.95 211.623C205.976 211.623 191.115 202.583 182.888 189.049H131.485C142.047 229.712 178.996 259.719 222.95 259.719C237.033 259.719 250.374 256.639 262.382 251.125L263.605 250.617C257.527 269.429 239.849 283.037 219.021 283.037C217.094 283.037 215.204 282.878 213.314 282.644V330.107C215.204 330.215 217.094 330.326 219.021 330.326C270.461 330.326 312.227 289.267 313.488 238.154H313.562V190.35H313.413"
          fill={fill}
        />
        <path
          d="M222.956 70.6651C197.715 70.6651 174.773 80.598 157.797 96.7579C169.732 108.518 178.553 123.444 182.927 140.186V140.197C191.192 126.817 206.092 117.94 222.956 117.94C239.857 117.94 254.645 126.873 262.873 140.249H314.17C303.236 100.131 266.543 70.6651 222.956 70.6651"
          fill={fill}
        />
        <path
          d="M131.473 189.161H131.364C123.134 202.481 108.37 211.361 91.5484 211.361C74.6548 211.361 59.891 202.445 51.6246 189.053H0.330078C11.2677 229.157 47.9786 258.646 91.5484 258.646C116.781 258.646 139.739 248.722 156.669 232.587C144.72 220.815 135.84 205.889 131.473 189.161"
          fill="#FAC62A"
        />
        <path
          d="M51.4484 140.245C59.6791 126.721 74.545 117.692 91.5503 117.692C108.519 117.692 123.385 126.721 131.616 140.245H182.922C172.371 99.599 135.496 69.5771 91.5503 69.5771C77.4457 69.5771 64.1026 72.6588 52.101 78.1701V0.359137H1.04883V140.245H51.4484"
          fill="#FAC62A"
        />
      </StyledSvg>
    )
  },
)

FullLogo.propTypes = {
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
  /**
   * A boolean flag to determine the color variant of the logo; The default is white.
   */
  dark: PropTypes.bool,
  /**
   * An optional height to be given to the logo.
   */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * An optional width to be given to the logo.
   */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

FullLogo.defaultProps = {
  className: '',
  dark: false,
  height: '331px',
  width: 'auto',
}

FullLogo.displayName = 'FullLogo'

export default FullLogo