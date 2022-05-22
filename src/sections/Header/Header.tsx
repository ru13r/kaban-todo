// import useNotifications from '@/store/notifications';

function Header() {
  // const [, notificationsActions] = useNotifications();
  //
  // function showNotification() {
  //   notificationsActions.push({
  //     options: {
  //       // Show fully customized notification
  //       // Usually, to show a notification, you'll use something like this:
  //       // notificationsActions.push({ message: ... })
  //       // `message` accepts string as well as ReactNode
  //       // But you also can use:
  //       // notificationsActions.push({ options: { content: ... } })
  //       // to show fully customized notification
  //       content: (
  //         <div>
  //           <div>Notification demo</div>
  //         </div>
  //       ),
  //     },
  //   });
  // }

  return (
    <nav className={'fixed items-center justify-between bg-teal-500'}>
      <ul className={'flex row items-center justify-between p-4'}>
        <li>Nav 1</li>
        <li>Nav 1</li>
        <li>Nav 1</li>
      </ul>
    </nav>
  );
}

export default Header;
