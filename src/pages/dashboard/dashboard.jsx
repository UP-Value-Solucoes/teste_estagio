import { useContext } from "react";

export const DashboardPage = () => {
    const { user, userLogout } = useContext(UserContext);
  
    return (
     
        <main>
          <div className="container">
            <div className={`${styles.containerCenter} ${styles.border}`}>
              <div className={styles.header}>
                <img src={Logo} alt="logo" />
                <button className={styles.buttoLeft} onClick={userLogout}>
                  Sair
                </button>
              </div>
            </div>
            <div className={`${styles.containerCenter} ${styles.border}`}>
              <section className={styles.userInfo}>
                <p className="title titleForm">{`Olá,${user?.name}`}</p>
                <p className="title textSpan">{user?.course_module}</p>
              </section>
            </div>
            <div className={`${styles.containerCenter}`}> 
              <TechList />
            </div>
          </div>
        </main>
    
    );
  };