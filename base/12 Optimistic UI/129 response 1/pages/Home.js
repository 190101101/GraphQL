import React, { useState } from "react";
import TimeAgo from "react-timeago";
import { useMutation, useQuery } from "@apollo/client";
import { SNAPS } from "../graphql/query";
import { CREATE_SNAP } from "../graphql/mutation";

const initalState = {
  text: "",
};

const Home = ({ session }) => {
  const [values, setValues] = useState(initalState);
  const { data, loading, error } = useQuery(SNAPS);

  const [CreateSnapMutation] = useMutation(
    CREATE_SNAP,
    {
      update(proxy, { data: { CreateSnap } }) {
        const { snaps } = proxy.readQuery({
          query: SNAPS,
        });

        proxy.writeQuery({
          query: SNAPS,
          data: {
            snaps: [CreateSnap, ...snaps],
          },
        });
      },
      optimisticResponse: {
        __typename: "Mutation",
        CreateSnap: {
          __typename: "Snap",
          id: Math.round(Math.random() * -1000000),
          text: values.text,
          createdAt: Date.now(),
          user: {
            __typename: "User",
            ...session.activeUser,
          },
        },
      },
    }
  );

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const formValidate = () => {
    const { text } = values;
    return !text || text === " ";
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (formValidate()) {
      return null;
    }

    CreateSnapMutation({
      variables: {
        user_id: session.activeUser.id,
        text: values.text,
      },
    });

    setValues(initalState);
  };

  return (
    <>
      <div className="description">
        <p className="sub_header__desc">
          simple snap app with <span>react</span>.
        </p>
      </div>

      <div>
        <form onSubmit={onSubmit}>
          <input
            onChange={onChange}
            value={values.text}
            name="text"
            className="add-snap__input"
            type="text"
            disabled={!(session && session.activeUser)}
            placeholder={
              session && session.activeUser
                ? "add Snap"
                : "please login for a new snap"
            }
          />
        </form>
      </div>
      <div>
        {loading && <div className="loading">loading...</div>}
        {error && <div className="loading">error...</div>}

        <ul className="snaps">
          {data && data.snaps.map((snap) => (
              <li key={snap.id} className={`${snap.id < 0 ? 'optimistic' : '' }`}>
                <div className="title">
                  <span className="username">@{snap.user.username} </span>
                  <span>{snap.text}</span>
                </div>
                <div className="date">
                  <TimeAgo date={snap.createdAt} />
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className="counter">{data && data.snaps.length} snap(s)</div>
    </>
  );
};

export default Home;
