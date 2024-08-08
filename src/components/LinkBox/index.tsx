import { Box, styled } from '@mui/material'

export const LinkTypography = styled(Box)`
  display: flex;
  margin-top: 1px;
  align-items: center;
  color: ${({ theme }) => theme.palette.primary.main};
  &:hover {
    color: ${({ theme }) => theme.palette.secondary.light};
    cursor: pointer;
    transition: color 0.2s ease-in-out;
  }
`
