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
    <nav className={'flex row justify-between fixed w-full py-2 bg-charcoal-dark px-4'}>
      <div className={'text-pale-cerulean'}>KANBAN TODO</div>
      <div>
        <ul className={'flex row justify-between text-pale-cerulean'}>
          <li className={'px-3'}>Nav 1</li>
          <li className={'px-3'}>Nav 1</li>
          <li className={'px-3'}>Nav 1</li>
        </ul>
      </div>
      <div className={'text-pale-cerulean'}>Right</div>
    </nav>
  );
}

export default Header;
