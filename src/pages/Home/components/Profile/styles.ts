import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  min-height: 13.25rem;
  background-color: ${({ theme }) => theme.colors.gray700};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  display: flex;
  padding: 2rem 2.5rem;
  gap: 2rem;
  border-radius: 0.8rem;
  margin-top: -5.5rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    padding: 1rem;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    margin-top: -5.5rem;
  }
`

export const Avatar = styled.img`
  height: 9.25rem;
  width: 9.25rem;
  object-fit: cover;
  border-radius: 0.5rem;

  @media screen and (max-width: 600px) {
    border-radius: 50%;
    margin-top: -3.5rem;
  }
`

export const ProfileInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const ProfileHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  h2 {
    font-size: ${({ theme }) => theme.textSizes.lg};
    color: ${({ theme }) => theme.colors.gray050};
    line-height: 130%;
  }
`

export const Bio = styled.p`
  @media screen and (max-width: 600px) {
    margin-bottom: 1rem;
  }
`

export const ProfileFooter = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: auto;

  li {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${({ theme }) => theme.colors.gray400};
    }
  }
`
