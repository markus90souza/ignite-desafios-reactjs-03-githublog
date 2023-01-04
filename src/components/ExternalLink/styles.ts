import styled from 'styled-components'

export const Container = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  transition: 0.4s;
  border-bottom: 1px solid transparent;
  height: 1.2rem;
  line-height: 1.2rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.blue300};
  font-size: ${({ theme }) => theme.textSizes.xs};
  background: none;
  border: none;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.blue300};
  }
`
