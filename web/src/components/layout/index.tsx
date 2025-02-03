import { FC } from 'react'
import { AppShell, Burger, Group, Text, UnstyledButton } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Link, Outlet } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import classes from './styles.module.scss'

export const Layout: FC = () => {
  const [opened, { toggle }] = useDisclosure()

  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Group justify="space-between" style={{ flex: 1 }}>
              <Group visibleFrom="sm">
                <Link
                  to="/"
                  activeProps={{
                    className: classes.activeLink,
                  }}
                  className={classes.link}
                >
                  <Text c="blue">Home</Text>
                </Link>
              </Group>
            </Group>
          </Group>
        </AppShell.Header>

        <AppShell.Navbar py="md" px={4}>
          <UnstyledButton className={classes.control}>Home</UnstyledButton>
          <UnstyledButton className={classes.control}>Blog</UnstyledButton>
          <UnstyledButton className={classes.control}>Contacts</UnstyledButton>
          <UnstyledButton className={classes.control}>Support</UnstyledButton>
        </AppShell.Navbar>

        <AppShell.Main bg="gray.2">
          <Outlet />
        </AppShell.Main>
      </AppShell>
      {/* <ReactQueryDevtools buttonPosition="top-right" />
      <TanStackRouterDevtools position="bottom-right" /> */}
    </>
  )
}
