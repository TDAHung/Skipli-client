import React from 'react';

export const Login = React.lazy(() => import('../pages/Login'));
export const ConfirmOtp = React.lazy(() => import('../pages/ConfirmOtp'));
export const ScratchPage = React.lazy(() => import('../pages/Service/Scratch'));
export const ScratchDetailPage = React.lazy(() => import('../pages/Service/Scratch/ScratchDetail'));
export const InspirePage = React.lazy(() => import('../pages/Service/Inspire'));
export const IdeaInspirePage = React.lazy(() => import('../pages/Service/Inspire/IdeaPage'));
export const Profile = React.lazy(() => import('../pages/Profile'));
export const Service = React.lazy(() => import('../pages/Service'));
export const NotFound = React.lazy(() => import('../pages/NotFound'));
