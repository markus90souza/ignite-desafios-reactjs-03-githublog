import styled from 'styled-components'

export const Container = styled.form`
  width: 100%;
  margin-top: 4.5rem;
  margin-bottom: 3rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.85rem;

    strong {
      color: ${({ theme }) => theme.colors.gray100};
      font-size: ${({ theme }) => theme.textSizes.lg};
    }

    span {
      color: ${({ theme }) => theme.colors.gray300};
      font-size: ${({ theme }) => theme.textSizes.sm};
    }
  }

  input {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.gray900};
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.gray500};
    transition: 0.4s;
    color: ${({ theme }) => theme.colors.gray200};

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.blue300};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray400};
    }
  }
`
