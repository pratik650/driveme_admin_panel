import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilWallet,
  cilNotes,
  cilPencil,
  cilSettings,
  cilUser,
  cilBank,
  cilSpeedometer,
  cilStar,
  cilCarAlt
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Accounts',
  },
  {
    component: CNavGroup,
    name: 'User',
    to: '/Roles',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Users Details',
        to: '/Roles/user',
      },
      {
        component: CNavItem,
        name: 'Addusers',
        to: '/Users/Addusers',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Driver',
    to: '/Roles',
    icon: <CIcon icon={cilCarAlt} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Drivers Details',
        to: '/Roles/driver',
      },
      {
        component: CNavItem,
        name: 'Adddrivers',
        to: '/Users/Adddriver',
      },
    ],
  },
  
  {
    component: CNavTitle,
    name: 'Booking Details',
  },
  {
    component: CNavGroup,
    name: 'Managment',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Booking',
        to: 'Booking-detais/Management/Booking',
      },
      {
        component: CNavItem,
        name: 'Revenue',
        to: 'Booking-detais/Management/Revenue',
      },
      {
        component: CNavItem,
        name: 'Transactions',
        to: 'Booking-detais/Management/Transaction',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Payment Methods',
    icon: <CIcon icon={cilBank} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Automatic Gateways',
        to: 'Booking-detais/paymentsmethods/Automatedgateways',
      },
      {
        component: CNavItem,
        name: 'Manual Gateways',
        to: 'Booking-detais/Repayments/Manualgateways',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Expenses',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Driver Sallary',
        to: 'Booking-detais/expenses/driversalary',
        badge: {
          color: 'info',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'Other Charges',
        to: '/icons/flags',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Complaints',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Feedbacks',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'Queries',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Reports',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'UserActivityReport',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'DriverPerformanceReport',
        to: '/buttons/button-groups',
      },
      {
        component: CNavItem,
        name: 'RevenueReport',
        to: '/buttons/dropdowns',
      },
      {
        component: CNavItem,
        name: 'TransactionsReport',
        to: '/buttons/dropdowns',
      },
      {
        component: CNavItem,
        name: 'RevenueReport',
        to: '/buttons/dropdowns',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Repayments',
    to: 'Booking-detais/Repayments',
    icon: <CIcon icon={cilWallet} customClassName="nav-icon" />,
  },

  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Docs',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _nav
