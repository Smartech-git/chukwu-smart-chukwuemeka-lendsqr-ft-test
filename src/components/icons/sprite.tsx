import React from "react";

export const SvgSprite = () => (
  <svg aria-hidden='true' focusable='false' width={0} height={0} style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }} xmlns='http://www.w3.org/2000/svg'>
    <defs>
      <symbol id='icon-add' viewBox='0 0 24 24'>
        <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M18 21H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2Z' clipRule='evenodd' />
        <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M15.5 7V6A3.5 3.5 0 0 0 12 2.5v0A3.5 3.5 0 0 0 8.5 6v1M12 12.5V16M10.25 14.25h3.5' />
      </symbol>

      <symbol id='icon-arrow-down' viewBox='0 0 24 24'>
        <path fill='currentColor' d='M18.955 6.846c1.442-1.441 3.604.794 2.162 2.162l-8.144 8.144a1.444 1.444 0 0 1-2.162 0l-8-7.927c-1.37-1.442.793-3.604 2.234-2.162l6.847 6.847 7.063-7.064Z' />
      </symbol>

      <symbol id='icon-arrow-left' viewBox='0 0 24 24'>
        <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='m14 8-4 4 4 4' />
      </symbol>

      <symbol id='icon-arrow-right' viewBox='0 0 24 24'>
        <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='m10 16 4-4-4-4' />
      </symbol>

      <symbol id='icon-arrow-up' viewBox='0 0 24 24'>
        <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='m16 14-4-4-4 4' />
      </symbol>

      <symbol id='icon-calender' viewBox='0 0 24 24'>
        <g clipPath='url(#a)'>
          <mask
            id='b'
            width={24}
            height={24}
            x={0}
            y={0}
            maskUnits='userSpaceOnUse'
            style={{
              maskType: "luminance",
            }}>
            <path fill='#fff' d='M24 0H0v24h24V0Z' />
          </mask>
          <g fill='currentColor' mask='url(#b)'>
            <path d='M22.488 3.24h-3.432V1.152A.543.543 0 0 0 18.503.6h-2.519a.543.543 0 0 0-.552.552V3.24H8.568V1.152A.543.543 0 0 0 8.016.6h-2.52a.543.543 0 0 0-.553.552V3.24h-3.43a.559.559 0 0 0-.553.552v19.08c0 .313.24.552.552.552h20.976c.288 0 .552-.24.552-.552V3.792a.558.558 0 0 0-.552-.552Zm-5.976-1.536h1.44v3.168h-1.44V1.704Zm-10.487 0h1.44v3.168h-1.44V1.704Zm15.911 20.592H2.065V8.256h19.872l-.001 14.04Z' />
            <path d='M4.8 19.825h2.568c.145 0 .265-.12.265-.265v-2.592a.266.266 0 0 0-.265-.265l-2.567.001a.267.267 0 0 0-.265.265v2.567c0 .168.12.288.265.288ZM10.705 19.825h2.568c.144 0 .264-.12.264-.265v-2.592a.266.266 0 0 0-.265-.265l-2.567.001a.267.267 0 0 0-.264.265v2.567c-.025.168.095.288.264.288ZM16.585 19.825h2.568c.144 0 .264-.12.264-.265v-2.592a.267.267 0 0 0-.265-.265l-2.567.001a.266.266 0 0 0-.265.265v2.567c-.024.168.096.288.265.288ZM4.8 13.896h2.568c.145 0 .265-.12.265-.265v-2.567a.267.267 0 0 0-.265-.264H4.801a.267.267 0 0 0-.265.264v2.568c0 .144.12.264.265.264ZM10.705 13.896h2.568c.144 0 .264-.12.264-.265v-2.567a.267.267 0 0 0-.265-.264h-2.567a.267.267 0 0 0-.264.264v2.568c-.025.144.095.264.264.264ZM16.585 13.896h2.568c.144 0 .264-.12.264-.265v-2.567a.267.267 0 0 0-.265-.264h-2.567a.266.266 0 0 0-.265.264v2.568c-.024.144.096.264.265.264Z' />
          </g>
        </g>
        <defs>
          <clipPath id='a'>
            <path fill='#fff' d='M0 0h24v24H0z' />
          </clipPath>
        </defs>
      </symbol>

      <symbol id='icon-check-mark' viewBox='0 0 24 24'>
        <path fill='currentColor' d='m9.55 15.15 8.475-8.475c.2-.2.434-.3.7-.3.267 0 .5.1.7.3.2.2.3.438.3.713a.97.97 0 0 1-.3.712l-9.175 9.2c-.2.2-.433.3-.7.3a.96.96 0 0 1-.7-.3L4.55 13a.932.932 0 0 1-.288-.712c.008-.275.113-.512.313-.713.2-.2.439-.3.713-.3.275 0 .512.1.712.3l3.55 3.575Z' />{" "}
      </symbol>

      <symbol id='icon-spinner' viewBox='0 0 24 24'>
        <path fill='currentColor' d='M20.403 8.37c.43-.185.63-.685.41-1.097a10 10 0 1 0-3.154 12.972c.385-.265.437-.801.14-1.163-.296-.361-.827-.41-1.217-.153a8.308 8.308 0 1 1 2.67-10.982c.228.409.722.609 1.151.423Z' />
      </symbol>
    </defs>
  </svg>
);

export default SvgSprite;
