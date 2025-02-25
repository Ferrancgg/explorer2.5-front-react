// import styled from "styled-components";

// export const H1 = styled.h1`
//   font-size: 2rem;
//   font-family: ${({ theme }) => theme.fonts.heading};

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
//     font-size: 1.5rem;
//   }
// `;

// export const H2 = styled.h2`
//   font-size: 1.5rem;
//   font-family: ${({ theme }) => theme.fonts.heading};
// `;


// export const P = styled.p`
//   font-size: 1rem;
//   line-height: 1.6;

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
//     font-size: 0.9rem;
//     line-height: 1.4;
//   }
// `;

import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.text}; /* 🔥 Se asegura de usar el color principal del texto */

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.primary}; /* 🔥 Hace que destaque más */
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.3rem;
  }
`;

export const P = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textDark || theme.colors.text};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;
