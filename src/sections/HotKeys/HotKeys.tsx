// import { useHotkeys } from 'react-hotkeys-hook';
// import useHotKeysDialog from '@/store/hotkeys';
// import useSidebar from '@/store/sidebar';

function HotKeys() {
  // const [, sidebarActions] = useSidebar();
  // const [isHotKeysDialogOpen, hotKeysDialogActions] = useHotKeysDialog();
  //
  // // I would love to define all hotkeys in the config and loop it here and avoid this repetitive code.
  // // But the `react-hotkeys-hook` library, which we use to handle hotkeys provides only hook (`useHotkeys`).
  // // And as you know we can't use hooks inside loops (read "Rules of Hooks" - https://reactjs.org/docs/hooks-rules.html).
  // // There is always a workaround, but sometimes it's better to avoid premature and unnecessary optimizations :)
  // useHotkeys('alt+s', sidebarActions.toggle);
  // useHotkeys('alt+/', hotKeysDialogActions.toggle);

  return <div className={'hidden'}>HK</div>;
}

export default HotKeys;
